import { Metadata } from "next";
import { PageUI } from "@/components/ui";
import { Catalog } from "@/components";

const pageName = "Каталог";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const CatalogPage = () => {
  return (
    <PageUI title={pageName}>
      <Catalog />
    </PageUI>
  );
};

export default CatalogPage;
