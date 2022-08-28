/*
  Warnings:

  - You are about to drop the column `iteam_name` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `item_name` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_deliveryman_id_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "iteam_name",
ADD COLUMN     "item_name" TEXT NOT NULL,
ALTER COLUMN "deliveryman_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliverymen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
