import eslintReactConfig from '@configs/eslint-react';

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: eslintReactConfig.languageOptions,
  plugins: eslintReactConfig.plugins,
  rules: eslintReactConfig.rules,
  files: ['./app/**/*.{ts,tsx}'],
};
