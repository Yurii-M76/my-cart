import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteDataFromApi,
  getDataFromApi,
  postDataFromApi,
  updateDataFromApi,
} from "@/utils/api";
import { TProduct, TProductUpdate, TSaveProduct } from "@/types";

export const findProducts = createAsyncThunk(
  "products/findAll",
  async () => await getDataFromApi<TProduct[]>("products")
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: TSaveProduct) =>
    await postDataFromApi<TProduct>("products", data)
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async (data: TProductUpdate) =>
    await updateDataFromApi<TProduct>("products", data)
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string) => await deleteDataFromApi<{ id: string }>("products", id)
);
