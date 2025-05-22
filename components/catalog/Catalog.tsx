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
  const router = useRouter();
  const [modalSaveFormIsOpen, setModalSaveFormIsOpen] = useState(false);
  const [modalEditFormIsOpen, setModalEditFormIsOpen] = useState(false);

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
      onSave={() => setModalSaveFormIsOpen(true)}
      onProductCreate={() => router.push("/catalog/new-product")}
    >
      <Modal
        title="Сохранить список покупок"
        isOpen={modalSaveFormIsOpen}
        onClose={() => setModalSaveFormIsOpen(false)}
      >
        <h4>Сумма: {totalPrice.toLocaleString()} ₽</h4>
        <SaveShoppingListForm onCancel={() => setModalSaveFormIsOpen(false)} />
      </Modal>

      <Modal
        title="Редактировать"
        isOpen={modalEditFormIsOpen}
        onClose={() => setModalEditFormIsOpen(false)}
      >
        content
      </Modal>

      {isLoading ? (
        <LoaderUI color="gray" />
      ) : (
        <ProductList
          selectedItems={selectedItems}
          items={products}
          onOpenModal={() => setModalEditFormIsOpen(true)}
        />
      )}
    </CatalogUI>
  );
};

export default Catalog;
