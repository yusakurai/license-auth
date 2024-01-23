/*
  Warnings:

  - Added the required column `address1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locale` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameKana` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('Ja', 'En');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address1" TEXT NOT NULL,
ADD COLUMN     "address2" TEXT NOT NULL,
ADD COLUMN     "birthday" DATE NOT NULL,
ADD COLUMN     "fcmtoken" TEXT,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "locale" "Locale" NOT NULL,
ADD COLUMN     "nameKana" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
