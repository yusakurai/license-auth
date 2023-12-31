# Backend

## Getting Started

開発サーバーを起動するには以下のコマンドを実行します。

```bash
$ pnpm dev
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
