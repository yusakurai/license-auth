const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  // NOTE: vercel/style-guide/eslint/typescriptの中でparserOptionsにecmaVarsionとsorceTypeが指定されていて、その指定がないとParsing error: The keyword 'export' is reservedというエラーが出ている
  // https://github.dev/vercel/style-guide/tree/canary/eslint
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    'eslint-config-turbo',
  ].map(require.resolve),
  plugins: ['only-warn', 'import', 'unused-imports'],
  parserOptions: {
    project,
  },
  // NOTE: これを設定すると__dirnameの未定義エラーが出る。pnpm lint は正常。
  // parserOptionsを内部で指定してくれるので@vercel/style-guide/eslint/typescript の代替案として使用しても良い。
  // parser: '@typescript-eslint/parser',
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/', 'postcss.config.cjs'],
  env: {
    browser: true,
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
        ignore: ['^.+\\.tsx$'],
      },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
