import { GraphQLSchema } from 'graphql'

import { builder } from './builder.js'

/**
 * Scalar
 */
import './scalar.js'

/**
 * Query
 */
import './query/sign-in.js'
import './query/post.js'
import './query/user.js'

export const schema: GraphQLSchema = builder.toSchema()
