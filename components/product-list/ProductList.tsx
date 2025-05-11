"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "@/store/store";
import { setSelectedProducts } from "@/store/selectedProductsSlice";
import { ProductListUI } from "../ui";
import { TProduct, TProductSelected } from "@/types";

const ProductList = ({ items }: { items: TProduct[] }) => {
  const dispath = useDispatch();
  const [selectedList, setSelectedList] = useState<TProductSelected[]>([]);

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

  return <ProductListUI items={items} selectHandler={setList} />;
};

export default ProductList;
