const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: ['eslint:recommended', 'prettier', 'eslint-config-turbo'],
  plugins: ['only-warn', 'import', 'unused-imports'],
  rules: {
    'turbo/no-undeclared-env-vars': 'off', // dotenvを使う場合はoffにする
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // 組み込みモジュール
          'external', // npmでインストールした外部ライブラリ
          'internal', // 自作モジュール
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always', // グループ毎にで改行を入れる
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc', // 昇順にソート
          caseInsensitive: true, // 小文字大文字を区別する
        },
        pathGroups: [
          // 指定した順番にソートされる
          {
            pattern: '@/components/common',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components/hooks',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', 'jest.config.ts', '.eslintrc.cjs'],
  env: {
    node: true,
  },
}
