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
import './mutation/create-account.js'
import './mutation/update-account.js'

export const schema: GraphQLSchema = builder.toSchema()
