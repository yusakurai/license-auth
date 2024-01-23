# Backend

## Getting Started

開発サーバーを起動するには以下のコマンドを実行します。

```bash
$ pnpm dev
```

## Prisma

データベースのスキーマは、以下のファイルに定義します。

```bash
backend/src/prisma/schema.prisma
```

データベースのスキーマを元に、`Prisma Client` の型を生成するには以下のコマンドを実行します。

```bash
$ pnpm prisma:generate
```

データベースのマイグレーションを実行するには以下のコマンドを実行します。

```bash
$ pnpm prisma:migrate:dev
```

Seed データを投入するには以下のコマンドを実行します。

```bash
$ pnpm prisma:seed
```

`Prisma Studio` を起動するには以下のコマンドを実行します。

```bash
$ pnpm prisma:studio
```

データベースの内容をリセットするには以下のコマンドを実行します。
リセットはマイグレーションし直し、データのDelete&Insertになります。

```bash
$ pnpm prisma:reset
```

## Apollo Graphql Explorer

Apollo Graphql Explorer は、サーバーを起動したあとに以下の URL にアクセスすることで利用できます。

```bash
http://0.0.0.0:65535/graphql
```

## Generating a schema.graphql file & TypeScript types

`graphql.ts` と `schema.graphql` を更新するには以下のコマンドを実行します。  
`/graphql/generated/` に生成されます。

```bash
$ pnpm generate
```
