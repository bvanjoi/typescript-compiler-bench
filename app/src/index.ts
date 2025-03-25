import { execaCommand } from "execa";
import * as c from "./compile";
import path from 'node:path';
import fse from 'fs-extra';
import assert from 'node:assert/strict';

async function ensureHyperfineExists() {
  const { stderr } = await execaCommand("hyperfine --version");
  if (stderr) {
    throw new Error("hyperfine not found");
  }
}

async function ensureTsconfigOk(tsconfigPath: string) {
  let tsconfig = await fse.readJSON(tsconfigPath);
  assert(!tsconfig.compilerOptions.incremental, "`compilerOptions.incremental` must be 'false'");
  assert(tsconfig.compilerOptions.noEmit, "`compilerOptions.noEmit` must be 'true'");
}

const benchmarkCases = ['type-fest'];

async function run(args: string[]) {
  await ensureHyperfineExists();

  const benchmarkCase = args.find((arg) => benchmarkCases.includes(arg));
  if (!benchmarkCase) {
    if (args.length === 0) {
      throw new Error(`only support ${benchmarkCases.join(', or')}`);
    } else {
      throw new Error(`only support ${benchmarkCases.join(', or')}, but got ${args}`);
    }
  }

  const benchmarkCasePath = path.resolve(__dirname, '../../benchmarks', benchmarkCase);
  const benchmarkCaseTsconfigPath = path.resolve(benchmarkCasePath, 'tsconfig.json');
  await ensureTsconfigOk(benchmarkCaseTsconfigPath);

  const compilers = [
    new c.BolttsCompiler(),
    new c.TsgoCompiler(),
    new c.TscCompiler(),
  ];

  const cmds = compilers.map((compiler) => {
    return {
      name: `${compiler.name()}_${benchmarkCase}`,
      cmd: compiler.compileCmd(benchmarkCaseTsconfigPath),
    }
  });
  const cmd = `hyperfine -N --warmup 3 \
${cmds.map((cmd) => `-n ${cmd.name} "${cmd.cmd}"`).join(' ')}`;
  
  console.log(cmd, '\n'); 

  const { stdout, stderr } = await execaCommand(cmd, { cwd: benchmarkCasePath, shell: true });
  console.log(stdout);
  console.log(stderr);
}

run(process.argv.slice(2));
