import fastifyApollo from '@as-integrations/fastify'
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import Fastify from 'fastify'

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
  console.log('Starting server...')
  console.log(`Listening on port ${PORT}`)
  console.log(`GraphQL server at http://localhost:${PORT}/graphql`)
  await app.listen({ host: '0.0.0.0', port: PORT })
} catch (err) {
  app.log.error(err)
}
