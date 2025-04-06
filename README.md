# Typescript Compiler Benchmark

## Benchmark

| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `boltts_type-fest` | 544.5 ± 5.1 | 538.3 | 552.5 | 1.00 |
| `tsgo_type-fest` | 1414.5 ± 22.8 | 1384.1 | 1464.5 | 2.60 ± 0.05 |
| `tsc_type-fest` | 2952.3 ± 18.6 | 2923.8 | 2981.9 | 5.42 ± 0.06 |


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
