-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "ra" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCount" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "UserCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dates" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "typeFood" VARCHAR(255) NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "dateId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "isVeg" BOOLEAN NOT NULL,
    "protein" VARCHAR(255) NOT NULL,
    "complement" VARCHAR(255) NOT NULL,
    "salad" VARCHAR(255) NOT NULL,
    "dessert" VARCHAR(255) NOT NULL,
    "juice" VARCHAR(255) NOT NULL,
    "comments" VARCHAR(255) NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ra_key" ON "User"("ra");

-- AddForeignKey
ALTER TABLE "UserCount" ADD CONSTRAINT "UserCount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "Dates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
