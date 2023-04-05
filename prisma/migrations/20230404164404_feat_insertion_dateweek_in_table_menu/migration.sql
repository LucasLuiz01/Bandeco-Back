/*
  Warnings:

  - Added the required column `dateWeek` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "dateWeek" VARCHAR(255) NOT NULL;
