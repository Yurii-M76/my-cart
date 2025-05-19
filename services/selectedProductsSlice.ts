import { TProductSelected } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  loading: boolean;
  list: TProductSelected[] | [];
  error?: string | null;
};

const initialState: TInitialState = {
  loading: false,
  list: [],
  error: null,
};

export const selectedProductsSlice = createSlice({
  name: "selectedProductsSlice",
  initialState,
  reducers: {
    setSelectedProducts: (state, action: PayloadAction<TProductSelected[]>) => {
      state.list = action.payload;
    },
  },
  selectors: {
    getSelectedProducts: (state) => state.list,
  },
});

export const { setSelectedProducts } = selectedProductsSlice.actions;
export const { getSelectedProducts } = selectedProductsSlice.selectors;
export default selectedProductsSlice;
