import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import productsSlice from "./products/productsSlice";
import productCategoriesSlice from "./product-categories/productCategoriesSlice";

export const rootReducer = combineReducers({
  [productsSlice.reducerPath]: productsSlice.reducer,
  [productCategoriesSlice.reducerPath]: productCategoriesSlice.reducer,
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
