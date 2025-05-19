import { TProduct } from "@/types";
import { getDataFromApi } from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findProducts = createAsyncThunk(
  "products/findAll",
  async () => await getDataFromApi<TProduct[]>("products")
);