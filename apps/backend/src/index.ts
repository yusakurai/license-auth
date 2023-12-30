import Fastify from 'fastify'
import fastifyApollo from '@as-integrations/fastify'

import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'

import { createApolloServer } from './graphql/server.js'

const PORT = 65_535
const app = Fastify()

await app.register(helmet, { contentSecurityPolicy: false })
await app.register(rateLimit)
await app.register(cors)
await app.register(compress)

const apollo = createApolloServer({ app })
await apollo.start()
await app.register(fastifyApollo(apollo))

app.get('/', () => 'This is backend!')

try {
  const port = 65_535
  await app.listen({ host: '0.0.0.0', port: PORT })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
