import eslintReactConfig from '@configs/eslint-react';

/** @type {import('eslint').Linter.Config} */
export default {
  ...eslintReactConfig,
  files: ['./src/**/*.{js,jsx,ts,tsx}'],
};
