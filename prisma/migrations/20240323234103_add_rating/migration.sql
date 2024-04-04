/*
  Warnings:

  - Added the required column `rating` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `series` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "rating" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "series" ADD COLUMN     "rating" TEXT NOT NULL;
