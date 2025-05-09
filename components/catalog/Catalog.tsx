"use client";
import { CatalogUI } from "../ui";
import { useSelector } from "@/store/store";
import { getProducts } from "@/store/productsSlice";

const Catalog = () => {
  const products = useSelector(getProducts);

  return (
    <CatalogUI
      items={products}
      totalItems={products.length}
      totalPrice={"0"}
      selected={0}
    />
  );
};

export default Catalog;
