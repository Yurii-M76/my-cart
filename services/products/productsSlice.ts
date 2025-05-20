import { createSlice } from "@reduxjs/toolkit";
import { createProduct, findProducts } from "./actions";
import { TProduct } from "@/types";

type TInitialState = {
  loading: boolean;
  products: TProduct[];
  error?: string | null;
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  products: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  selectors: {
    getProducts: (state) => state.products,
    loading: (state) => state.loading,
  },
  extraReducers(builder) {
    builder
      // find all
      .addCase(findProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(findProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      // create
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productsSlice.actions;
export const { getProducts, loading } = productsSlice.selectors;
export default productsSlice;
