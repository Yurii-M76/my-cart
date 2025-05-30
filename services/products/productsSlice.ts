import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  findProducts,
  updateProduct,
} from "./actions";
import { TProduct, TStatusThunk } from "@/types";

type TInitialState = {
  status: TStatusThunk;
  products: TProduct[];
  productToUpdate: TProduct | undefined;
  error?: string;
};

const initialState: TInitialState = {
  status: {
    get: {
      loading: false,
      success: false,
    },
    create: {
      loading: false,
      success: false,
    },
    update: {
      loading: false,
      success: false,
    },
    delete: {
      loading: false,
      success: false,
    },
  },
  products: [],
  productToUpdate: undefined,
  error: undefined,
};

const statusPending = {
  loading: true,
  success: false,
};

const statusFulfilled = {
  loading: false,
  success: true,
};

const statusRejected = {
  loading: false,
  success: false,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.error = undefined;
    },
    setProductToUpdate: (state, action: PayloadAction<string>) => {
      state.productToUpdate = state.products.find(
        (product) => product.id === action.payload
      );
    },
    resetProductToUpdate: (state) => {
      state.productToUpdate = undefined;
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getProductsStatus: (state) => state.status,
    getProductsError: (state) => state.error,
    getProductToUpdate: (state) => state.productToUpdate,
  },
  extraReducers(builder) {
    builder
      // find all
      .addCase(findProducts.pending, (state) => {
        state.status.get = statusPending;
        state.error = undefined;
      })
      .addCase(findProducts.fulfilled, (state, action) => {
        state.status.get = statusFulfilled;
        state.products = action.payload.sort((a, b) =>
          a.label.localeCompare(b.label)
        );
        state.error = undefined;
      })
      .addCase(findProducts.rejected, (state, action) => {
        state.status.get = statusRejected;
        state.error = action.error.message;
      });

    builder
      // create
      .addCase(createProduct.pending, (state) => {
        state.status.create = statusPending;
        state.error = undefined;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status.create = statusFulfilled;
        state.products = [...state.products, action.payload];
        state.error = undefined;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status.create = statusRejected;
        state.error = action.error.message;
      });

    builder
      // update
      .addCase(updateProduct.pending, (state) => {
        state.status.update = statusPending;
        state.error = undefined;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status.update = statusFulfilled;
        const index = state.products.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        console.log(action.payload);
        state.error = undefined;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status.update = statusRejected;
        state.error = action.error.message;
      });

    builder
      // delete
      .addCase(deleteProduct.pending, (state) => {
        state.status.delete = statusPending;
        state.error = undefined;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status.delete = statusFulfilled;
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = undefined;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status.delete = statusRejected;
        state.error = action.error.message;
      });
  },
});

export const { resetErrors, setProductToUpdate, resetProductToUpdate } =
  productsSlice.actions;
export const {
  getProducts,
  getProductsStatus,
  getProductsError,
  getProductToUpdate,
} = productsSlice.selectors;
export default productsSlice;
