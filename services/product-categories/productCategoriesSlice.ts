import { createSlice } from "@reduxjs/toolkit";
import { createProductCategories, findProductCategories } from "./actions";
import { TProductCategories } from "@/types";

type TInitialState = {
  loading: boolean;
  categories: TProductCategories[];
  error?: string | null;
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  categories: [],
};

export const productCategoriesSlice = createSlice({
  name: "productCategoriesSlice",
  initialState,
  reducers: {},
  selectors: {
    getProductCategories: (state) => state.categories,
    getErrors: (state) => state.error,
    loading: (state) => state.loading,
  },
  extraReducers(builder) {
    builder
      // find all
      .addCase(findProductCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(findProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      // create
      .addCase(createProductCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = [...state.categories, action.payload];
        state.error = null;
      })
      .addCase(createProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productCategoriesSlice.actions;
export const { getProductCategories, getErrors, loading } =
  productCategoriesSlice.selectors;
export default productCategoriesSlice;
