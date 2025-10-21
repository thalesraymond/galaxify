import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import globals from "globals";

export default [{
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },

}];
