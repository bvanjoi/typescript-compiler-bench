# Typescript Compiler Benchmark

## Benchmark

> Apple M3 Max, 36G RAM, 2025-04-09.

| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `boltts_type-fest` | 690.7 ± 5.7 | 684.9 | 701.7 | 1.00 |
| `tsgo_type-fest` | 1319.6 ± 59.7 | 1218.0 | 1388.0 | 1.91 ± 0.09 |
| `tsc_type-fest` | 3228.6 ± 67.3 | 3123.6 | 3336.4 | 4.67 ± 0.10 |


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
