module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    // "eslint:all",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-native",
    'import'
  ],
  "rules": {
    // "indent": ["error", 4],
    "@typescript-eslint/no-explicit-any": 'off',
    "no-useless-escape": 'off',
    "no-unexpected-multiline": 2,
    "no-duplicate-case": 2,
    "no-case-declarations": 'off',
    "@typescript-eslint/no-unused-vars": 'off',
    "react-native/no-inline-styles": 2,
    "react/prop-types": 2,
    "@typescript-eslint/no-extra-semi": 2,
    "@typescript-eslint/no-empty-interface": 2,
    "@typescript-eslint/no-empty-function": 1,
    "@typescript-eslint/ban-types": 0,
    // 
    "no-empty-pattern": 2,
    "react/jsx-no-undef": 2,
    "no-empty": 2,
    "no-constant-condition": 2,
    "no-var": 0,
    "no-dupe-keys": 2,
    "no-extra-boolean-cast": 2,
    "prefer-const": 2,
    "react/display-name": 2,
    "@typescript-eslint/no-var-requires": 'off',
    "no-undef": 'off',
    "no-fallthrough": 'off',
    "react/no-children-prop": 'off',
    // Import Rules
    "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], ['internal', 'sibling', 'parent'], "index"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always-and-inside-groups",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error'
  }
};
