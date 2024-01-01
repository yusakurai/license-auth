module.exports = {
  root: true,
  extends: ['@repo/eslint-config/backend.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}
