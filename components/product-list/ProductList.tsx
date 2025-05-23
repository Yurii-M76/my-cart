"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "@/services/store";
import { setSelectedProducts } from "@/services/selectedProductsSlice";
import { ProductListUI } from "../ui";
import { TProduct, TProductSelected } from "@/types";

const ProductList = ({
  items,
  selectedItems,
  setProductIdToEdit,
}: {
  items: TProduct[];
  selectedItems: TProductSelected[];
  setProductIdToEdit: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const dispath = useDispatch();
  const [selectedList, setSelectedList] =
    useState<TProductSelected[]>(selectedItems);

  const setList = ({ id, count }: TProductSelected) => {
    const existingItem = selectedList.find((item) => item.id === id);
    if (existingItem) {
      setSelectedList(selectedList.filter((item) => item.id !== id));
    } else {
      setSelectedList((prev) => [...prev, { id, count }]);
    }
  };

  useEffect(() => {
    dispath(setSelectedProducts(selectedList));
  }, [dispath, selectedList]);

  return (
    <>
      <ProductListUI
        items={items}
        selectedItems={selectedItems}
        onProductSelect={setList}
        onClickItem={setProductIdToEdit}
      />
    </>
  );
};

export default ProductList;
