abstract class Compiler {
  abstract name(): string
  abstract cliPath(): string
  abstract compileCmd(tsconfigPath: string): string
}

export class BolttsCompiler implements Compiler {
  name(): string {
    return 'boltts'
  }
  cliPath(): string {
    return ''
  }
  compileCmd(tsconfigPath: string): string {
    return ''
  }
}

export class TsgoCompiler implements Compiler {
  name(): string {
    return 'tsgo'
  }
  cliPath(): string {
    let tsgoPath = require.resolve("@rxliuli/tsgo/bin/tsgo-darwin-arm64");
    return tsgoPath;
  }
  compileCmd(tsconfigPath: string): string {
    return `${this.cliPath()} tsc --project ${tsconfigPath}`;
  }
}

export class TscCompiler implements Compiler {
  name(): string {
    return 'tsc'
  }
  cliPath(): string {
    let tsPath = require.resolve("typescript/bin/tsc");
    return tsPath;
  }
  compileCmd(tsconfigPath: string): string {
    return `node ${this.cliPath()} --project ${tsconfigPath}`;
  }
}
