import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        ...VitePluginNode({
            adapter: "express",
            appPath: "./src/app.ts",
            exportName: "default",
        }),
    ],
    test: {
        globals: true,
        environment: "node",
        coverage: {
            include: ["src/**/*.ts"],
            exclude: ["client/**", "node_modules/**", "dist/**", "__tests__/**"],
            provider: "v8",
            reportsDirectory: "coverage",
            reporter: ["text", "json", "html"],
            thresholds: {
                lines: 0,
                functions: 0,
                branches: 0,
                statements: 0,
            },
        },
    },
});
