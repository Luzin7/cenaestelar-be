/*
  Warnings:

  - Changed the type of `media` on the `movies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "media",
ADD COLUMN     "media" JSONB NOT NULL;
