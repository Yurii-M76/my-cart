/*
  Warnings:

  - You are about to drop the column `productsIds` on the `product-categories` table. All the data in the column will be lost.
  - You are about to drop the column `categoriesIds` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `ProductToCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductToCategories" DROP CONSTRAINT "ProductToCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductToCategories" DROP CONSTRAINT "ProductToCategories_productId_fkey";

-- AlterTable
ALTER TABLE "product-categories" DROP COLUMN "productsIds";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoriesIds";

-- DropTable
DROP TABLE "ProductToCategories";

-- CreateTable
CREATE TABLE "_ProductToCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductToCategories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductToCategories_B_index" ON "_ProductToCategories"("B");

-- AddForeignKey
ALTER TABLE "_ProductToCategories" ADD CONSTRAINT "_ProductToCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "product-categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToCategories" ADD CONSTRAINT "_ProductToCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
