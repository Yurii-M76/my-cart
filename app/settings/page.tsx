import { Metadata } from "next";
import { PageUI } from "@/components/ui";
import Link from "next/link";

const pageName = "Настройки";

export const metadata: Metadata = {
  title: `${pageName} • MyCart`,
};

const SettingsPage = () => {
  return (
    <PageUI title={pageName}>
      <div>
        <Link href="/settings/product-categories">Категории продуктов</Link>
      </div>
    </PageUI>
  );
};

export default SettingsPage;
