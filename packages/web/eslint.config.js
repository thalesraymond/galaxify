import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
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
            react,
            "@typescript-eslint": tseslint.plugin,
        },
        settings: {
            react: {
                version: "detect",
            },
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
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
        },
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
]);
