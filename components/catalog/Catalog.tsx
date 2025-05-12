"use client";
import { CatalogUI } from "../ui";
import { useSelector } from "@/store/store";
import { getProducts } from "@/store/productsSlice";
import { getSelectedProducts } from "@/store/selectedProductsSlice";

const Catalog = () => {
  const products = useSelector(getProducts);
  const selectedItems = useSelector(getSelectedProducts);

  const totalPrice = selectedItems.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    return acc + (product ? product.price * item.count : 0);
  }, 0);

  return (
    <CatalogUI
      items={products}
      totalItems={products.length}
      totalPrice={totalPrice.toLocaleString()}
      selected={selectedItems.length}
    />
  );
};

export default Catalog;
