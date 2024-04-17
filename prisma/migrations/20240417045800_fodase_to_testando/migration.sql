/*
  Warnings:

  - Changed the type of `poster` on the `movies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `banner` on the `movies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "poster",
ADD COLUMN     "poster" JSONB NOT NULL,
DROP COLUMN "banner",
ADD COLUMN     "banner" JSONB NOT NULL;
