import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        coverage: {
            include: ["src/**/*.ts"],
            exclude: ["client/**", "node_modules/**", "dist/**"],
            provider: "v8",
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
