import { Metadata } from "next";
import { PageUI } from "@/components/ui";

const pageName = "Каталог";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const CatalogPage = () => {
  return <PageUI title={pageName}>PageUI</PageUI>;
};

export default CatalogPage;
