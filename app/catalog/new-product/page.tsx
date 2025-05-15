import { Metadata } from "next";
import { PageUI } from "@/components/ui";
import { NewProductForm } from "@/components";

const pageName = "Новый продукт";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const CatalogPage = () => {
  return (
    <PageUI title={pageName}>
      <NewProductForm />
    </PageUI>
  );
};

export default CatalogPage;
