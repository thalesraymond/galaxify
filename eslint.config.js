import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";

export default tseslint.config({  
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
        parser: tseslint.parser,
        globals: {
            ...globals.browser,
            ...globals.node,
        }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-debugger": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
    },
});
