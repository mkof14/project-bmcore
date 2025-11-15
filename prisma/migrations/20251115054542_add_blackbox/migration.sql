-- CreateTable
CREATE TABLE "BlackBox" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "encryptedPayload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlackBox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlackBox_userId_key" ON "BlackBox"("userId");

-- AddForeignKey
ALTER TABLE "BlackBox" ADD CONSTRAINT "BlackBox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
