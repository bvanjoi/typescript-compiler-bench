import { test } from 'uvu';
import { equal, ok } from 'uvu/assert';
import fs from 'node:fs';
import path from 'node:path';

test("ensure project benchmarks dir exists", async () => {
  // `project-benchmarks` directory is used in `bolt-ts/benchmark`
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const root = path.resolve(__dirname, '../../');
  const benchmarksDir = path.join(root, 'project-benchmarks');
  const dir = fs.readdirSync(benchmarksDir);
  equal(dir.length > 0, true, 'project-benchmarks directory should not be empty');
  dir.sort();
  equal(dir[0], 'type-fest');
})

test('ensure materials dir exists', async () => {
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const root = path.resolve(__dirname, '../../');
  const materialsDir = path.join(root, 'materials');
  const dir = fs.readdirSync(materialsDir);
  ok(dir.includes('typescript.js'))
})

test.run();