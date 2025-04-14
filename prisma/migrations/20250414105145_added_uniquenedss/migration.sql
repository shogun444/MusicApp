/*
  Warnings:

  - A unique constraint covering the columns `[userId,StreamerId]` on the table `Upvote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Upvote_userId_StreamerId_key" ON "Upvote"("userId", "StreamerId");
