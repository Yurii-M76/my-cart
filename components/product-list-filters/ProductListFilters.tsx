"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "@/services/store";
import { getProductCategories } from "@/services/product-categories/productCategoriesSlice";
import {
  filterProductsByCategory,
  resetFilterProductsByCategory,
} from "@/services/products/productsSlice";
import { ProductCategoryBadgesUI, ProductListFiltersUI } from "../ui";

const ProductListFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getProductCategories);
  const [currentCategoryId, setCurrentCategoryId] = useState("");

  const filteredByCategory = (id: string) => {
    if (currentCategoryId) {
      if (currentCategoryId === id) {
        setCurrentCategoryId("");
        dispatch(resetFilterProductsByCategory());
      } else if (currentCategoryId !== id) {
        setCurrentCategoryId(id);
        dispatch(resetFilterProductsByCategory())
        dispatch(filterProductsByCategory(id));
      }
    } else {
      setCurrentCategoryId(id);
      dispatch(filterProductsByCategory(id));
    }
  };

  return (
    <ProductListFiltersUI>
      <ProductCategoryBadgesUI
        categories={categories}
        accentCategory={currentCategoryId}
        onFilter={filteredByCategory}
      />
    </ProductListFiltersUI>
  );
};

export default ProductListFilters;
