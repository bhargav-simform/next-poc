import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import airbnbStyleConfig from 'eslint-config-airbnb';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    ignores: ['app/generated/**', 'eslint.config.js'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        fetch: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        process: 'readonly',
        Headers: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        window: 'readonly',
        console: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: reactPlugin,
      next: nextPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...airbnbStyleConfig.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'import/no-absolute-path': 0,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-shadow': 0,
      'import/prefer-default-export': 0,
      'react/jsx-props-no-spreading': 0,
      'react/no-unstable-nested-components': 0,
      'react/require-default-props': 0,
      'react/prop-types': 0,
      '@typescript-eslint/no-throw-literal': 0,
      'no-underscore-dangle': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
