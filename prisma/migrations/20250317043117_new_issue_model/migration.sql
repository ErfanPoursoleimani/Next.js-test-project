/*
  Warnings:

  - You are about to drop the column `createdAt` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `issue` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Issue` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Issue_title_key` ON `issue`;

-- AlterTable
ALTER TABLE `issue` DROP COLUMN `createdAt`,
    DROP COLUMN `description`,
    DROP COLUMN `status`,
    DROP COLUMN `title`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `followers` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `registeredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Issue_email_key` ON `Issue`(`email`);
