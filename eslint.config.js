import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "array-callback-return": "error",
      "no-console": "warn",
      "prefer-arrow-callback": "error",
      "func-call-spacing": ["error", "never"],
      "@stylistic/block-spacing": "error",
      "@stylistic/semi": ["error", "never"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "never",
          objects: "always-multiline",
          imports: "never",
          exports: "never",
          functions: "never",
        }
      ],
      "@stylistic/indent": ["error", 2],
      "@stylistic/member-delimiter-style": ["error", { multiline: { delimiter: "none" } }],
    },
  }
)
