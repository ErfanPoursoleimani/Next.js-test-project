/*
  Warnings:

  - You are about to drop the column `email` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `issue` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Issue` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Issue_email_key` ON `issue`;

-- AlterTable
ALTER TABLE `issue` DROP COLUMN `email`,
    DROP COLUMN `followers`,
    DROP COLUMN `isActive`,
    DROP COLUMN `name`,
    DROP COLUMN `registeredAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN',
    ADD COLUMN `title` VARCHAR(255) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Issue_title_key` ON `Issue`(`title`);
