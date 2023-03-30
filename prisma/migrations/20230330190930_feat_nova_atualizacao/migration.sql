/*
  Warnings:

  - You are about to drop the column `dateId` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the `Dates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDinner` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_dateId_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_typeId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "dateId",
DROP COLUMN "typeId",
ADD COLUMN     "date" VARCHAR(255) NOT NULL,
ADD COLUMN     "isDinner" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Dates";

-- DropTable
DROP TABLE "Type";
