import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
        globalIgnores([
            "node_modules/**",
            "dist/**",         
            "build/**",        
            "coverage/**",     
            "*.config.js",
            "*.config.ts",
            "__tests__/**"
    ]),
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json"
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
]);
