# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Build: `pnpm build`
- Dev: `pnpm dev`
- Lint: `pnpm lint`
- Start: `pnpm start`

## Code Style Guidelines

- **TypeScript**: Use strict type checking; avoid `any` types
- **Imports**: Group imports (React/Next, external libs, internal modules)
- **Components**: Use functional components with TypeScript interfaces
- **CSS**: Use Tailwind with class-variance-authority and clsx/tailwind-merge utilities
- **Naming**:
  - PascalCase for components
  - camelCase for functions/variables
  - kebab-case for files
- **Error Handling**: Use try/catch with descriptive error messages
- **State Management**: Prefer React hooks (useState, useContext)
- **Folder Structure**: Follow Next.js App Router conventions
- **Formatting**: Use modern ESNext syntax with Next.js/TypeScript best practices
- **Path Aliases**: Use `website/*` path alias for imports

## FInishing

- After finishing the implementation, run `pnpm lint` and then `pnpm build` to ensure everyting is running as expected.
