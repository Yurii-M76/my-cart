"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/services/store";
import { getProducts, loading } from "@/services/products/productsSlice";
import { getSelectedProducts } from "@/services/selectedProductsSlice";
import { findProducts } from "@/services/products/actions";
import { ProductList } from "../product-list";
import { Modal } from "../modal";
import { SaveShoppingListForm } from "../forms";
import { CatalogUI, LoaderUI } from "../ui";

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(loading);
  const selectedItems = useSelector(getSelectedProducts);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  const totalPrice = selectedItems.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    return acc + (product ? product.price * item.count : 0);
  }, 0);

  useEffect(() => {
    dispatch(findProducts());
  }, [dispatch]);

  return (
    <CatalogUI
      totalItems={products.length}
      totalPrice={totalPrice.toLocaleString()}
      selectedLength={selectedItems.length}
      onSave={() => setIsOpenModal(true)}
      onProductCreate={() => router.push("/catalog/new-product")}
    >
      <Modal
        title="Сохранить список покупок"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <h4>Сумма: {totalPrice.toLocaleString()} ₽</h4>
        <SaveShoppingListForm onCancel={() => setIsOpenModal(false)} />
      </Modal>

      {isLoading ? (
        <LoaderUI color="gray" />
      ) : (
        <ProductList selectedItems={selectedItems} items={products} />
      )}
    </CatalogUI>
  );
};

export default Catalog;
