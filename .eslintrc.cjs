module.exports = {
  env: { browser: true, es2020: true, node: true },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  import: {
    typescript: {
      alwaysTryTypes: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': 'warn',
  },
}
