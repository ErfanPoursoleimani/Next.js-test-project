/*
  Warnings:

  - You are about to drop the column `description` on the `issue` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `issue` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `issue` DROP COLUMN `description`,
    MODIFY `title` VARCHAR(191) NOT NULL;
