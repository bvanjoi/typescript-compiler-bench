# Typescript Compiler Benchmark

## Setup

```bash
## download hyperfine firstly
brew install hyperfine # macos
apt install hyperfine # ubuntu
winget install hyperfine # windows

## install ts compiler
pnpm install
## TODO: how to link(or download) bolt-ts

## build benchmark cli
cd app && npm run build
```

Run benchmark

```bash
node app/dist/index.js type-fest
```
