/* eslint-disable no-redeclare */
import { Comment } from './comment.js'
import { Post } from './post.js'
import { Comments, Posts, IUser } from '../../dummyData.js'
import { builder } from '../builder.js'

export const User = builder.objectRef<IUser>('User')

User.implement({
  fields: (t) => ({
    id: t.exposeID('id', { description: 'ユーザーID' }),
    firstName: t.exposeString('firstName', { description: '名' }),
    lastName: t.exposeString('lastName', { description: '姓' }),
    fullName: t.string({
      resolve: (user) => `${user.firstName} ${user.lastName}`,
    }),
    posts: t.field({
      type: [Post],
      resolve: (user) => [...Posts.values()].filter((post) => post.authorId === user.id),
    }),
    comments: t.field({
      type: [Comment],
      resolve: (user) => [...Comments.values()].filter((comment) => comment.authorId === user.id),
    }),
  }),
})
