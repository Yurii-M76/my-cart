import { TProduct } from "./product";

export type TProductCategories = {
  id: string;
  label: string;
  description?: string;
  products?: TProduct[];
}