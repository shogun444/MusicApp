-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Spotify', 'Youtube');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "provider" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stream" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "active" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Stream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upvote" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "StreamerId" TEXT NOT NULL,

    CONSTRAINT "Upvote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_StreamerId_fkey" FOREIGN KEY ("StreamerId") REFERENCES "Stream"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
