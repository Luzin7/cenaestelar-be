-- CreateTable
CREATE TABLE "series" (
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
    "directors" TEXT[],

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "series_id_key" ON "series"("id");
