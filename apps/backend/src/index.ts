import Fastify from 'fastify'
import { ApolloServer } from '@apollo/server'
import fastifyApollo, {
  fastifyApolloDrainPlugin,
  // https://github.com/apollo-server-integrations/apollo-server-integration-fastify?tab=readme-ov-file#usage
  // fastifyApolloHandler,
} from '@as-integrations/fastify'

// options
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'

// GraphQL server が返す値に関する型定義
import typeDefs from './graphql/type-defs.js'
// GraphQL server が実際に返す値の定義
import resolvers from './graphql/resolvers.js'
// コンテキストを使用するとGraphQL serverのリゾルバやプラグイン全体でデータを共有することができる
import { MyContext, myContextFunction } from './graphql/context.js'

const app = Fastify({
  logger: true,
})

const apollo = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [fastifyApolloDrainPlugin(app)],
})

await apollo.start()
await app.register(helmet, {
  contentSecurityPolicy: false,
})
await app.register(rateLimit)
await app.register(cors)
await app.register(compress)

await app.register(fastifyApollo(apollo), {
  context: myContextFunction,
})

app.get('/', () => 'This is backend!')

try {
  const port = 65535
  await app.listen({ host: '0.0.0.0', port })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
