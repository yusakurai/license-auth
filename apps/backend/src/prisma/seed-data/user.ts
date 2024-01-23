import type { Prisma, PrismaClient } from '@prisma/client'

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'hoge1',
    email: 'hoge1@example.com',
  },
  {
    name: 'hoge2',
    email: 'hoge2@example.com',
  },
  {
    name: 'hoge3',
    email: 'hoge3@example.com',
  },
]

export const createUsers = async (prisma: PrismaClient) => {
  const users = []

  for (const data of userData) {
    const user = prisma.user.create({ data })
    users.push(user)
  }

  return await prisma.$transaction(users)
}
