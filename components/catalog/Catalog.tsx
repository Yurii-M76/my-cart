"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/services/store";
import {
  createProduct,
  deleteProduct,
  findProducts,
  updateProduct,
} from "@/services/products/actions";
import { findProductCategories } from "@/services/product-categories/actions";
import {
  getProducts,
  getProductsError,
  getProductsStatus,
  getProductToUpdate,
  resetErrors,
  resetProductToUpdate,
  setProductToUpdate,
} from "@/services/products/productsSlice";
import { getSelectedProducts } from "@/services/selectedProductsSlice";
import { getProductCategories } from "@/services/product-categories/productCategoriesSlice";
import { ProductList } from "../product-list";
import { Modal } from "../modal";
import { SaveProductForm, SaveShoppingListForm } from "../forms";
import {
  AlertUI,
  ButtonUI,
  CatalogUI,
  LoaderUI,
  SaveShoppingListUI,
} from "../ui";
import { TProductUpdate, TSaveProduct } from "@/types";

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const status = useSelector(getProductsStatus);
  const errors = useSelector(getProductsError);
  const productsSelected = useSelector(getSelectedProducts);
  const productCategories = useSelector(getProductCategories);
  const productToUpdate = useSelector(getProductToUpdate);

  const [showModalSaveCart, setShowModalSaveCart] = useState(false);
  const [showModalProductSave, setShowModalProductSave] = useState(false);
  const [productIdToUpdate, setProductIdToUpdate] = useState<
    string | null | undefined
  >(null);
  const [isDelete, setIsDelete] = useState(false);

  const totalPrice = productsSelected.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    return acc + (product ? product.price * item.count : 0);
  }, 0);

  const productsSelectedCount = productsSelected.length;

  const productSaveHandler = (data: TSaveProduct) => {
    dispatch(createProduct(data));
  };

  const productUpdateHandler = (data: TProductUpdate) => {
    dispatch(updateProduct(data));
  };

  const productDeleteHandler = () => {
    if (productIdToUpdate) {
      dispatch(deleteProduct(productIdToUpdate));
    }
  };

  const productUpdateCloseHandler = useCallback(() => {
    setProductIdToUpdate(null);
    setShowModalProductSave(false);
    setIsDelete(false);
    dispatch(resetProductToUpdate())
    if (errors) {
      dispatch(resetErrors());
    }
  }, [dispatch, errors]);

  const confirmDeleteAction = (
    <>
      <AlertUI icon variant="transparent">
        <p>
          Вы собираетесь удалить <strong>{productToUpdate?.label}</strong>. Это
          действие нельзя отменить.
        </p>
      </AlertUI>
      <div className="buttonGroup">
        <ButtonUI
          type="button"
          label="Отменить"
          color="light-gray"
          onClick={() => setIsDelete(false)}
        />
        <ButtonUI
          type="button"
          label="Удалить"
          color="red"
          onClick={productDeleteHandler}
          isLoading={status.delete.loading}
        />
      </div>
    </>
  );

  const noData = (
    <AlertUI icon color="light-gray" variant="filled">
      <p>
        Нет данных -{" "}
        <a href="#" onClick={() => setShowModalProductSave(true)}>
          добавить
        </a>
      </p>
    </AlertUI>
  );

  useEffect(() => {
    dispatch(findProducts());
    dispatch(findProductCategories());
  }, [dispatch]);

  useEffect(() => {
    if (status.create.success) {
      setShowModalProductSave(false);
    }
    if (errors) {
      resetErrors();
    }
  }, [errors, status.create.success]);

  useEffect(() => {
    if (productIdToUpdate) {
      setShowModalProductSave(true);
      dispatch(setProductToUpdate(productIdToUpdate));
    }
  }, [dispatch, productIdToUpdate]);

  useEffect(() => {
    if (status.update.success) {
      productUpdateCloseHandler();
    }
  }, [productUpdateCloseHandler, status.update.success]);

  useEffect(() => {
    if (status.delete.success) {
      productUpdateCloseHandler();
    }
  }, [productUpdateCloseHandler, status.delete.success]);

  return (
    <CatalogUI
      totalItems={products.length}
      totalPrice={totalPrice.toLocaleString()}
      selectedLength={productsSelectedCount}
      onSaveCart={() => setShowModalSaveCart(true)}
      onProductCreate={() => setShowModalProductSave(true)}
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
        title={
          isDelete
            ? " Подтвердите удаление "
            : productIdToUpdate
            ? "Редактировать"
            : "Новый продукт"
        }
        isOpen={showModalProductSave}
        onClose={productUpdateCloseHandler}
      >
        {isDelete ? (
          confirmDeleteAction
        ) : (
          <SaveProductForm
            status={status}
            products={products}
            updData={productToUpdate}
            categories={productCategories}
            errorMessage={errors}
            onSave={productSaveHandler}
            onUpdate={productUpdateHandler}
            onDelete={() => setIsDelete(true)}
          />
        )}
      </Modal>

      {!products.length && status.get.success ? (
        noData
      ) : status.get.loading ? (
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
