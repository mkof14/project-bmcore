/*
  Warnings:

  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlackBox` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MemberMetrics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "BlackBox" DROP CONSTRAINT "BlackBox_userId_fkey";

-- DropForeignKey
ALTER TABLE "MemberMetrics" DROP CONSTRAINT "MemberMetrics_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "BlackBox";

-- DropTable
DROP TABLE "MemberMetrics";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Subscription";

-- DropEnum
DROP TYPE "Plan";
