import { GraphQLSchema } from 'graphql'

import { builder } from './builder.js'

/**
 * Scalar
 */
import './scalar.js'

/**
 * Query
 */
import './query/post.js'
import './query/user.js'

/**
 * Mutation
 */
import './mutation/sign-in.js'

export const schema: GraphQLSchema = builder.toSchema()
