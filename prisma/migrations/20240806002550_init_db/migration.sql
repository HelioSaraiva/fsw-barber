/*
  Warnings:

  - You are about to drop the column `mageUrl` on the `BarbershopService` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `BarbershopService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BarbershopService" DROP COLUMN "mageUrl",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
