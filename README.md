# Typescript Compiler Benchmark

## Benchmark

> Apple M3 Max, 36G RAM, 2026-03-16.

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `boltts_type-fest` | 3.165 ± 0.064 | 3.090 | 3.266 | 1.00 |
| `tsgo_type-fest` | 5.918 ± 0.130 | 5.771 | 6.170 | 1.87 ± 0.06 |
| `tsc_type-fest` | 17.279 ± 0.071 | 17.152 | 17.382 | 5.46 ± 0.11 |

## Running Benchmarks

```bash
## download hyperfine firstly
brew install hyperfine # macos
apt install hyperfine # ubuntu
winget install hyperfine # windows

## install tsc and ts-go compiler
pnpm install
## build bolt-ts 
git clone https://github.com/bvanjoi/bolt-ts && cd bolt-ts && cargo b --release && cd -
## link it: modify the `cliPath` of `class BolttsCompiler` 
## TODO: we can download bolt-ts after published

## build benchmark cli
cd app && npm run build && cd -

## Run benchmark script
node app/dist/index.js type-fest
```
