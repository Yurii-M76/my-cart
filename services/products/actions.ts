import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromApi, postDataFromApi } from "@/utils/api";
import { TProduct } from "@/types";

export const findProducts = createAsyncThunk(
  "products/findAll",
  async () => await getDataFromApi<TProduct[]>("products")
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: Partial<TProduct>) =>
    await postDataFromApi<TProduct>("products", data)
);
