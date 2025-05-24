-- AlterTable
ALTER TABLE "product-categories" ADD COLUMN     "productsIds" TEXT[];

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "categoriesIds" TEXT[];
