import path from 'node:path';
import assert from 'node:assert/strict';

abstract class Compiler {
  abstract name(): string
  abstract cliPath(): Promise<string>
  abstract compileCmd(tsconfigPath: string): Promise<string>
}

export class BolttsCompiler implements Compiler {
  name(): string {
    return 'boltts'
  }
  cliPath(): Promise<string> {
    const p = path.resolve(__dirname, '../../../bolt-ts/target/release/bolt_ts_compiler');
    return Promise.resolve(p);
  }
  async compileCmd(tsconfigPath: string): Promise<string> {
    return this.cliPath().then((cliPath) => `${cliPath} ${tsconfigPath}`)
  }
}

export class TsgoCompiler implements Compiler {
  name(): string {
    return 'tsgo'
  }
  async cliPath(): Promise<string> {
    let tsgoPkgPath = require.resolve("@typescript/native-preview/package.json");
    assert(tsgoPkgPath.endsWith("package.json"));
    const libPath = path.resolve(path.dirname(tsgoPkgPath), './lib/getExePath.js');
    return import(libPath).then((mod) => {
      const getExePath = mod.default;
      return getExePath()
    })
  }
  async compileCmd(tsconfigPath: string): Promise<string> {
    const cliPath = await this.cliPath();
    return `${cliPath} --project ${tsconfigPath}`
  }
}

export class TscCompiler implements Compiler {
  name(): string {
    return 'tsc'
  }
  cliPath(): Promise<string> {
    let tsPath = require.resolve("typescript/bin/tsc");
    return Promise.resolve(tsPath);
  }
  async compileCmd(tsconfigPath: string): Promise<string> {
    const cliPath = await this.cliPath();
    return `node ${cliPath} --project ${tsconfigPath}`;
  }
}
