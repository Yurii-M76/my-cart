import { Metadata } from "next";
import { PageUI } from "@/components/ui";

const pageName = "Категории продуктов";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const ProductCategoriesPage = () => {
  return (
    <PageUI title={pageName}>
      ProductCategoriesPage
    </PageUI>
  );
};

export default ProductCategoriesPage;
