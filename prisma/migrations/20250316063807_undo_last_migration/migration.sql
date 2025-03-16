/*
  Warnings:

  - Added the required column `description` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `issue` ADD COLUMN `description` TEXT NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL;
