import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromApi, postDataFromApi } from "@/utils/api";
import { TProductCategories } from "@/types";

export const findProductCategories = createAsyncThunk(
  "product-categories/findAll",
  async () => await getDataFromApi<TProductCategories[]>("product-categories")
);

export const createProductCategories = createAsyncThunk(
  "product-categories/create",
  async (data: Partial<TProductCategories>) =>
    await postDataFromApi<TProductCategories>("product-categories", data)
);
