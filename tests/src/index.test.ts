import { test } from 'uvu';
import { equal } from 'uvu/assert';
import fs from 'node:fs';
import path from 'node:path';

test("ensure benchmarks dir exists", async () => {
  // `benchmarks` directory is used in `bolt-ts/benchmark`
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const root = path.resolve(__dirname, '../../');
  const benchmarksDir = path.join(root, 'benchmarks');
  const dir = fs.readdirSync(benchmarksDir);
  equal(dir.length > 0, true, 'benchmarks directory should not be empty');
  dir.sort();
  equal(dir[0], 'type-fest');
})

test.run();