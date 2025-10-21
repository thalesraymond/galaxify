# Quickstart: Server-Side Rendering

This guide explains how to build and run the new SSR-enabled `web` package.

## Building the Code

From the root of the monorepo, run the build command:

```bash
pnpm run build
```

This will create a `dist` folder inside `packages/web` with two subdirectories:
- `dist/client`: Contains the client-side assets (JavaScript, CSS).
- `dist/server`: Contains the server-side bundle (`entry-server.js`).

## Running the Server

After building the code, start the SSR server:

```bash
node packages/web/dist/server/entry-server.js
```

The application will be available at `http://localhost:3000`.
