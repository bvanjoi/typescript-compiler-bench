# Typescript Compiler Benchmark

## Benchmark

> Apple M3 Max, 36G RAM, 2026-01-02.

| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `boltts_type-fest` | 690.9 ± 13.7 | 667.7 | 715.2 | 1.00 |
| `tsgo_type-fest` | 1854.7 ± 24.8 | 1808.9 | 1881.4 | 2.68 ± 0.06 |
| `tsc_type-fest` | 2361.1 ± 18.7 | 2325.3 | 2383.4 | 3.42 ± 0.07 |

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
