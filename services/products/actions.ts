import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromApi, postDataFromApi } from "@/utils/api";
import { TProduct, TSaveProduct } from "@/types";

export const findProducts = createAsyncThunk(
  "products/findAll",
  async () => await getDataFromApi<TProduct[]>("products")
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: TSaveProduct) =>
    await postDataFromApi<TSaveProduct>("products", data)
);
