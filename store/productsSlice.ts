import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  loading: boolean;
  products: TProduct[];
  error?: string | null;
};

const products: TProduct[] = [
  {
    id: "1",
    label: "Сахар РУССКИЙ кусковой 500г",
    price: 54.99,
    category: "Категория",
  },
  {
    id: "2",
    label: "Вино CHATEAU SAINTONGEY крсух 7,5-13,5%",
    price: 799.99,
    category: "Категория",
  },
  {
    id: "3",
    label: "Напиток раст PLANTO Карамель 0,7% 1000мл",
    price: 199.99,
    category: "Категория",
  },
  {
    id: "4",
    label: "Филе кур ПЕТЕЛИНКА с бедра подл охл вес",
    price: 473.99,
    category: "Категория",
  },
  {
    id: "5",
    label: "Фарш МИРАТОРГ Домашний охл. лоток 500г",
    price: 239.99,
    category: "Категория",
  },
];

const initialState: TInitialState = {
  loading: false,
  error: null,
  products: products,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  selectors: {
    getProducts: (state) => state.products,
  },
});

export const {} = productsSlice.actions;
export const { getProducts } = productsSlice.selectors;
export default productsSlice;
