# Learning TypeScript

This is my first time going through JavaScript and TypeScript for real.

I want to understand the workflows in creating, testing, and running web development code with TypeScript and NodeJS.

## Installation of the TypeScript Compiler

1. After NodeJS is installed, run `npm install -g typescript`

## To Transpile TypeScript (.ts) to JavaScript (.js)

1. Open a terminal
2. Run `tsc` {INPUT_FILE} \[{OUTPUT_FILE}\]
  - Example: `tsc sandbox.ts sandbox.js`
  - **NOTE:** If the {OUTPUT_FILE} arg is omitted, the output file will be the same name as the {INPUT_FILE}, but with a .js file extension.

### Fast Iteration with File-Watching for (.ts) Changes

If you're making frequent edits to your TypeScript files, and want them quickly compiled each time you save, you can pass in `-w` to the `tsc` (TypeScript Compiler)!
Once finished, you can easily break out (`Ctrl + C`).

---

## Resources

I am following a tutorial series from [here](https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI). 

Their repository example can be found [here](https://github.com/iamshaunjp/typescript-tutorial).

### Other

- [Installing TypeScript](https://www.typescriptlang.org/download)
- [TypeScrypt for Java/C# Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) _(notably important, since I have a strong background in Unity + C#)_
