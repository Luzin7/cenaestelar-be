/*
  Warnings:

  - Added the required column `global_rating` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `global_rating` to the `series` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "global_rating" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "series" ADD COLUMN     "global_rating" TEXT NOT NULL;
