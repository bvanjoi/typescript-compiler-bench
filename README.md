# Typescript Compiler Benchmark

## Setup

```bash
## download hyperfine firstly
brew install hyperfine # macos
apt install hyperfine # ubuntu
winget install hyperfine # windows
## install typescript compiler
git submodule update --init --force --remote
pnpm install

## build benchmark cli
cd app && npm run build
```

Run benchmark

```bash
node app/dist/index.js type-fest
```
