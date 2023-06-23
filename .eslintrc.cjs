module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
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
