import { faker } from '@faker-js/faker'
import { v4 } from 'uuid'

import type { Prisma, PrismaClient } from '@prisma/client'

const capitalizeFirstLetter = <T>(value: string): T => {
  return (value.charAt(0).toUpperCase() + value.slice(1)) as T
}

const generateUsers = (): Prisma.UserCreateInput[] => {
  const users = []

  for (let i = 0; i < 100; i++) {
    const data: Prisma.UserCreateInput = {
      id: v4(),
      name: faker.person.fullName(),
      nameKana: faker.person.middleName(),
      email: faker.internet.email(),
      birthday: faker.date.birthdate(),
      gender: capitalizeFirstLetter<Prisma.UserCreateInput['gender']>('male'),
      locale: capitalizeFirstLetter<Prisma.UserCreateInput['locale']>('ja'),
      zipCode: faker.location.zipCode(),
      address1: faker.location.streetAddress({ useFullAddress: true }),
      address2: faker.location.secondaryAddress(),
      phoneNumber: faker.helpers.fromRegExp('090-0[0-9]{3}-[0-9]{4}'),
    }

    users.push(data)
  }

  return users
}

const userData: Prisma.UserCreateInput[] = generateUsers()

export const createUsers = async (prisma: PrismaClient) => {
  const users = []

  for (const data of userData) {
    const user = prisma.user.create({ data })
    users.push(user)
  }

  return await prisma.$transaction(users)
}
