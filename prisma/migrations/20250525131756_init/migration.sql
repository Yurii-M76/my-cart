/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `product-categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[label]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product-categories_label_key" ON "product-categories"("label");

-- CreateIndex
CREATE UNIQUE INDEX "products_label_key" ON "products"("label");
