"use client";
import { CatalogUI } from "../ui";
import { useSelector } from "@/store/store";
import { getProducts } from "@/store/productsSlice";
import { getSelectedProducts } from "@/store/selectedProductsSlice";
import { ProductList } from "../product-list";

const Catalog = () => {
  const products = useSelector(getProducts);
  const selectedItems = useSelector(getSelectedProducts);

  const totalPrice = selectedItems.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    return acc + (product ? product.price * item.count : 0);
  }, 0);

  return (
    <CatalogUI
      totalItems={products.length}
      totalPrice={totalPrice.toLocaleString()}
      selectedLength={selectedItems.length}
    >
      <ProductList selectedItems={selectedItems} items={products} />
    </CatalogUI>
  );
};

export default Catalog;
