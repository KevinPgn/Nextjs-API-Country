-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "subregion" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "cca2" TEXT NOT NULL
);
