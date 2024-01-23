import { PrismaClient } from '@prisma/client'

import { createUsers } from './seed-data/user'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Start seeding ...')

  await createUsers(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
