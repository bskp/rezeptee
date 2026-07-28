import js from '@eslint/js';
import tseslint from 'typescript-eslint';
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
      // Generierte rspack-Ausgabe.
      '_build/**',
      'build-chunks/**',
      'build-assets/**',
      '.rsdoctor/**',
    ],
  },

  // eslint-plugin-react fehlt bewusst: es bricht unter ESLint 10 hart
  // ("contextOrFilename.getFilename is not a function") und deklariert als
  // Peer nur bis ^9.7. Sobald es ESLint 10 unterstützt, kann es zurück.
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],

  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      parserOptions: {ecmaFeatures: {jsx: true}},
    },
    rules: {
      // Meteor-Pakete ("meteor/meteor") haben teils nur lückenhafte Typen.
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      // Ungenutztes soll auffallen, aber den Build nicht blockieren.
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrors: 'none',
      }],
      'no-unused-vars': 'off',
      // Nur meckern, wenn das ganze Destructuring const sein könnte.
      'prefer-const': ['error', {destructuring: 'all'}],
      // Neu in react-hooks 7. Trifft zwei bestehende Stellen (ContentWrapper,
      // useWakeLock), die einen echten Umbau bräuchten — sichtbar halten,
      // aber CI nicht blockieren.
      'react-hooks/set-state-in-effect': 'warn',
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

  {
    // rspack lädt seine Konfiguration als CommonJS.
    files: ['rspack.config.js'],
    languageOptions: {sourceType: 'commonjs', globals: {...globals.node}},
    rules: {'@typescript-eslint/no-require-imports': 'off'},
  },
);
