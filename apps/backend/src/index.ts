import Fastify from 'fastify'
import { ApolloServer, BaseContext } from '@apollo/server'
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
const typeDefs = `
  type Query {
    hello: String
  }
`

// GraphQL server が実際に返す値の定義
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const app = Fastify({
  logger: true,
})

const apollo = new ApolloServer<BaseContext>({
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
  path: '/graphql',
})

app.get('/', () => 'This is backend!')

try {
  const port = 65535
  await app.listen({ host: '0.0.0.0', port })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
