# license-auth

## Build a development environment

1. モジュールをインストール

```bash
$ pnpm install
```

2. ビルド対象のパッケージをビルド

```bash
$ pnpm build
```

3. 開発環境を立ち上げる

```bash
$ pnpm dev
```

## Running Linter

ESLintを走らせる場合は以下のコマンドを実行します。

```bash
$ pnpm lint
```

ESLintのルールに沿って自動修正する場合は以下のコマンドを実行します。

```bash
$ pnpm lint:fix
```

## Testing

テスト対象のパッケージをテスト実行する場合は以下のコマンドを実行します。

```bash
$ pnpm test
```

テストをwatchモードで実行する場合は以下のコマンドを実行します。

```bash
$ pnpm test:watch
```

## Cleaning

対象パッケージの`clean`コマンドの実行と`.turbo` `dist` `node_modules`を削除する場合は以下のコマンドを実行します。

```bash
$ pnpm clean
```

ディレクトリ配下の`dist`を全て削除する場合は以下のコマンドを実行します。

```bash
$ pnpm clean:dist
```

ディレクトリ配下の`node_modules`を全て削除する場合は以下のコマンドを実行します。

```bash
$ pnpm clean:node_modules
```
