module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/no-misused-promises": ["error"],
    "linebreak-style": "off",
    "no-use-before-define": "off",
    "no-sparse-arrays": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-duplicate-imports": "error",
    "no-underscore-dangle": ["error", { allow: ["__isRetryRequest", "_id"] }],
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-cycle": ["error", { maxDepth: 1 }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
