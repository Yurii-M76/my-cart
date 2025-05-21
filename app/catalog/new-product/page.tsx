import { Metadata } from "next";
import { PageUI } from "@/components/ui";
import { SaveProductForm } from "@/components";

const pageName = "Новый продукт";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const CatalogPage = () => {
  return (
    <PageUI title={pageName}>
      <SaveProductForm />
    </PageUI>
  );
};

export default CatalogPage;
