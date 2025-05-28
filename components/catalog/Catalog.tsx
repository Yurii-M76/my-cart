"use client";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "@/services/store";
import { findProducts } from "@/services/products/actions";
import { findProductCategories } from "@/services/product-categories/actions";
import {
  getErrors,
  getProducts,
  loading,
  resetErrors,
  success,
} from "@/services/products/productsSlice";
import { getSelectedProducts } from "@/services/selectedProductsSlice";
import { getProductCategories } from "@/services/product-categories/productCategoriesSlice";
import { ProductList } from "../product-list";
import { Modal } from "../modal";
import { SaveProductForm, SaveShoppingListForm } from "../forms";
import { CatalogUI, LoaderUI, SaveShoppingListUI } from "../ui";

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const productsSelected = useSelector(getSelectedProducts);
  const productCategories = useSelector(getProductCategories);
  const isLoading = useSelector(loading);
  const isSuccess = useSelector(success);
  const errors = useSelector(getErrors);

  const [showModalSaveCart, setShowModalSaveCart] = useState(false);
  const [showModalSaveProduct, setShowModalSaveProduct] = useState(false);
  const [productIdToUpdate, setProductIdToUpdate] = useState<
    string | null | undefined
  >(null);

  const totalPrice = productsSelected.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    return acc + (product ? product.price * item.count : 0);
  }, 0);

  const productToUpdate = useMemo(() => {
    if (productIdToUpdate === null) return undefined;
    const product = products.find((item) => item.id === productIdToUpdate);
    if (product) setShowModalSaveProduct(true);
    return product;
  }, [products, productIdToUpdate, setShowModalSaveProduct]);

  const productsSelectedCount = productsSelected.length;

  useEffect(() => {
    dispatch(findProducts());
    dispatch(findProductCategories());
    if (isSuccess) {
      setShowModalSaveProduct(false);
      setProductIdToUpdate(null);
    }
  }, [dispatch, isSuccess, setShowModalSaveProduct, setProductIdToUpdate]);

  return (
    <CatalogUI
      totalItems={products.length}
      totalPrice={totalPrice.toLocaleString()}
      selectedLength={productsSelectedCount}
      onSaveCart={() => setShowModalSaveCart(true)}
      onProductCreate={() => setShowModalSaveProduct(true)}
    >
      <Modal
        title="Сохранить список"
        isOpen={showModalSaveCart}
        onClose={() => setShowModalSaveCart(false)}
      >
        <SaveShoppingListUI
          totalPrice={totalPrice.toLocaleString()}
          productsCount={productsSelectedCount}
        >
          <SaveShoppingListForm />
        </SaveShoppingListUI>
      </Modal>

      <Modal
        title={productIdToUpdate ? "Редактировать" : "Новый продукт"}
        isOpen={showModalSaveProduct}
        onClose={() => {
          setProductIdToUpdate(null);
          setShowModalSaveProduct(false);
          dispatch(resetErrors());
        }}
      >
        <SaveProductForm
          products={products}
          updData={productToUpdate}
          categories={productCategories}
          errorMessage={errors}
        />
      </Modal>

      {isLoading ? (
        <LoaderUI color="gray" />
      ) : (
        <ProductList
          items={products}
          selectedItems={productsSelected}
          onClickItem={setProductIdToUpdate}
        />
      )}
    </CatalogUI>
  );
};

export default Catalog;
