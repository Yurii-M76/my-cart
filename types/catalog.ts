import { TProduct } from "./product";

export type TCatalog = {
  items: TProduct[];
  totalItems: number;
  totalPrice: string;
  selected: number;
};
