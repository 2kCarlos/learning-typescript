# Learning TypeScript

This is my first time going through JavaScript and TypeScript for real.

I want to understand the workflows in creating, testing, and running web development code with TypeScript and NodeJS.

**NOTE:** These notes are NOT a replacement for watching the actual tutorial they were based on. These are just my personal notes and examples based on the 21-episode tutorial series ([see below](#resources) for more details).

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

### Support for Project Structure and Compiling

If you're using a folder structure (such as `public/` and `src/`), and don't wish to enter a ton of commands to compile every `.ts` (TypeScript) file, and then manually drag them into the corresponding folders, use the following:

1. Open a terminal
2. Navigate (`cd`) into your project's root folder
3. Run `tsc --init` to generate the starting `tsconfig.json` file
4. Open the new `tsconfig.json` file
5. Set `rootDir` to `./src` _(for example)_
6. Set `outDir` to `./public` _(for example)_
7. Add `"include": ["src"]` so that it ignores anything OUTSIDE of the `src` folder
7. Now, run `tsc` (or `tsc -w`) and your files should automatically be done from the `src` to `public` directories

---

## Resources

I am following a tutorial series of 21 episodes from [here](https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI). 

Their repository example can be found [here](https://github.com/iamshaunjp/typescript-tutorial).

### Other

- [Installing TypeScript](https://www.typescriptlang.org/download)
- [TypeScrypt for Java/C# Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) _(notably important, since I have a strong background in Unity + C#)_
