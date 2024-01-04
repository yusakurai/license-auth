import { Users } from '../../dummyData.js'
import { builder } from '../builder.js'
import { User } from '../object/user.js'

builder.queryField('user', (t) =>
  t.field({
    type: User,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: (root, arguments_) => Users.get(String(arguments_.id)),
  })
)
