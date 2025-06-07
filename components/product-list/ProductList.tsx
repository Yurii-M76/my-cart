"use client";
import { useDispatch } from "@/services/store";

import { ProductListFiltersUI, ProductListUI } from "../ui";
import { TProduct, TProductSelected } from "@/types";
import {
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
