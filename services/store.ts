import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import productsSlice from "./products/productsSlice";
import selectedProductsSlice from "./selectedProductsSlice";

export const rootReducer = combineReducers({
  [productsSlice.reducerPath]: productsSlice.reducer,
  [selectedProductsSlice.reducerPath]: selectedProductsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
