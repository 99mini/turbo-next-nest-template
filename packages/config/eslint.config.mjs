import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unused from "eslint-plugin-unused-imports";

export default [
  js.configs.recommended,
  {
    name: "packages/base",
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "unused-imports/no-unused-imports": "error",
    },
  },
  {
    name: "packages/react",
    files: ["**/*.{jsx,tsx,ts,js}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooks,
      import: importPlugin,
      "unused-imports": unused,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooks.configs.recommended.rules,
    },
  },
];
