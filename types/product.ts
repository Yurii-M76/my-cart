import { TProductCategories } from "./product-categories";

type TProductId = string;

export type TProduct = {
  id: TProductId;
  label: string;
  price: number;
  category: TProductCategories;
  description?: string;
};

export type TSaveProduct = Omit<TProduct, "id" | "category"> & {
  categoryId: string;
};

export type TProductSelected = { id: TProductId; count: number };

export type TProductSelection = {
  productId: TProductId;
  selectedItems: TProductSelected[];
  setSelected: ({ id, count }: TProductSelected) => void;
};
