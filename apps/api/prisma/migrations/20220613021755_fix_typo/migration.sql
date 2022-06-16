/*
  Warnings:

  - You are about to drop the column `departmanet` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "departmanet",
ADD COLUMN     "department" TEXT;
