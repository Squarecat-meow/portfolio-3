# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - Start development server with HMR
- `pnpm build` - TypeScript check and production build
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Tech Stack

- **React 19** with React Compiler enabled (via babel-plugin-react-compiler)
- **Vite 7** for bundling
- **TypeScript 5.9** with project references (tsconfig.app.json for app code, tsconfig.node.json for config files)
- **Tailwind CSS 4** using the new `@tailwindcss/vite` plugin (styles imported via `@import 'tailwindcss'` in index.css)
- **ESLint 9** flat config with TypeScript and React hooks plugins
