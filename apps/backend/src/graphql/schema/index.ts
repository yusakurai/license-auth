import { GraphQLSchema } from 'graphql'

import { builder } from './builder.js'
import { Post } from './post.js'
import { User } from './user.js'
import { Posts, Users } from '../data.js'

import './comment.js'

const DEFAULT_PAGE_SIZE = 10

builder.queryType({
  fields: (t) => ({
    post: t.field({
      type: Post,
      nullable: true,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (root, arguments_) => Posts.get(String(arguments_.id)),
    }),
    posts: t.field({
      type: [Post],
      nullable: true,
      args: {
        take: t.arg.int(),
        skip: t.arg.int(),
      },
      resolve: (root, arguments_) =>
        [...Posts.values()].slice(arguments_.skip ?? 0, arguments_.take ?? DEFAULT_PAGE_SIZE),
    }),
    user: t.field({
      type: User,
      nullable: true,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (root, arguments_) => Users.get(String(arguments_.id)),
    }),
  }),
})

export const schema: GraphQLSchema = builder.toSchema()
