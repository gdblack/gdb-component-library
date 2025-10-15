# gdb-component-library

gdb-component-library is a small, custom React + TypeScript component library built with Vite. The components in this repo are intended to be consumed by other projects (for example, a demo application) via npm or local installation during development.

Package info

- Package name: `gdb-component-library` (see `package.json`)
- Version: `0.0.0` (update before publishing)
- Note: `package.json` currently sets `"private": true`. Set this to `false` and bump the version to publish to the npm registry.

What this repo contains

- Reusable React components under `src/` (for example `src/components/Button`).
- An entry point `src/index.ts` which exports components and types.
- Build scripts in `package.json` that output distributable files to `dist/`.

Install (use in a demo project)

Local (recommended for development):

```bash
# from your demo project's directory
npm install ../path/to/gdb-component-library
# or with yarn
yarn add ../path/to/gdb-component-library
```

Install from npm (after publishing):

```bash
npm install gdb-component-library
```

Install from a Git URL:

```bash
npm install git+ssh://git@github.com/<owner>/gdb-component-library.git
```

Build

Run the build script defined in `package.json` (TypeScript build + Vite build):

```bash
npm run build
```

The output will be placed in `dist/`, which is what gets published or installed by consumers.

Usage example (in a demo app)

After installing, import components like this:

```tsx
import React from 'react'
import { Button } from 'gdb-component-library'

export default function App() {
  return <Button variant="primary">Click me</Button>
}
```

TypeScript consumers can also import types:

```ts
import type { ButtonProps } from 'gdb-component-library'
```

Notes

- Peer dependencies: `react`, `react-dom` — the consuming project must provide compatible versions.
- Entry points: `main`, `module`, and `types` in `package.json` point to built files under `dist/`.

Next steps

- Remove `private: true` in `package.json` and set a release `version` before publishing.
- Add an `examples/demo` app to the repository to simplify local development and QA.
- Add CI to build and optionally publish releases.

If you want, I can add a small demo app under `examples/demo` and wire it into the repo for local testing.
