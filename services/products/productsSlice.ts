import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  findProducts,
  updateProduct,
} from "./actions";
import { TProduct } from "@/types";

type TInitialState = {
  loading: boolean;
  success: boolean;
  products: TProduct[];
  error?: string | null;
};

const initialState: TInitialState = {
  loading: false,
  success: false,
  error: null,
  products: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.error = null;
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getErrors: (state) => state.error,
    loading: (state) => state.loading,
    success: (state) => state.success,
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
        state.success = false;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.products = [...state.products, action.payload];
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });

    builder
      // update
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const index = state.products.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });

    builder
      // delete
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export const { resetErrors } = productsSlice.actions;
export const { getProducts, getErrors, loading, success } =
  productsSlice.selectors;
export default productsSlice;
