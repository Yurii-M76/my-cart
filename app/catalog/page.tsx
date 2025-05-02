import { Metadata } from "next";
import { CatalogUI, PageUI } from "@/components/ui";

const pageName = "Каталог";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const CatalogPage = () => {
  return (
    <PageUI title={pageName}>
      <CatalogUI />
    </PageUI>
  );
};

export default CatalogPage;
