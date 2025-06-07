"use client";
import { useDispatch, useSelector } from "@/services/store";

import { ProductListFiltersUI, ProductListUI } from "../ui";
import { TProduct, TProductSelected } from "@/types";
import {
  getSelectedProducts,
  resetSelectedProducts,
  setSelectedProducts,
} from "@/services/products/productsSlice";

const ProductList = ({
  items,
  selectedItems,
  onClickItem,
}: {
  items: TProduct[];
  selectedItems: TProductSelected[];
  onClickItem: (id: string) => void;
}) => {
  const dispath = useDispatch();
  const selectedItemsLenght = useSelector(getSelectedProducts).length;
  const setSelected = ({ id, count }: TProductSelected) => {
    dispath(setSelectedProducts({ id, count }));
  };

  const resetSelected = () => {
    dispath(resetSelectedProducts());
  };

  return (
    <>
      <ProductListUI
        items={items}
        selectedItems={selectedItems}
        selectedItemsLenght={selectedItemsLenght}
        onProductSelect={setSelected}
        onClickItem={onClickItem}
        onResetSelectedItems={resetSelected}
      >
        <ProductListFiltersUI />
      </ProductListUI>
    </>
  );
};

export default ProductList;
