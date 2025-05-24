/*
  Warnings:

  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "ProductToCategories" (
    "productId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "ProductToCategories_pkey" PRIMARY KEY ("productId","categoryId")
);

-- AddForeignKey
ALTER TABLE "ProductToCategories" ADD CONSTRAINT "ProductToCategories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToCategories" ADD CONSTRAINT "ProductToCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "product-categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
