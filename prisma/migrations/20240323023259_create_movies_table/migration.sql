-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "genres" TEXT[],
    "cast" TEXT[],
    "directors" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_id_key" ON "movies"("id");
