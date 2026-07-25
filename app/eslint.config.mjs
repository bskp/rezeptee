import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      '.meteor/**',
      'node_modules/**',
      'public/**',
      'images/**',
      'test-results/**',
      'playwright-report/**',
      '*.tsbuildinfo',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],

  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      parserOptions: {ecmaFeatures: {jsx: true}},
    },
    settings: {
      react: {version: 'detect'},
    },
    rules: {
      // Meteor-Pakete ("meteor/meteor") haben teils nur lückenhafte Typen.
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      // Der Code nutzt durchgehend Inferenz statt expliziter Prop-Types.
      'react/prop-types': 'off',
      // Ungenutztes soll auffallen, aber den Build nicht blockieren.
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrors: 'none',
      }],
      'no-unused-vars': 'off',
      // Nur meckern, wenn das ganze Destructuring const sein könnte.
      'prefer-const': ['error', {destructuring: 'all'}],
    },
  },

  {
    files: ['**/*.test.ts', 'tests/**/*.ts'],
    languageOptions: {globals: {...globals.mocha}},
  },

  {
    // Handgepflegte Typ-Stubs für ostrio:files — bewusst nah am Original.
    files: ['meteor-files.d.ts'],
    rules: {'@typescript-eslint/no-empty-object-type': 'off'},
  },
);
