type TProductId = string;

export type TProduct = {
  id: TProductId;
  label: string;
  price: number;
  categoryId?: string;
  description?: string;
};

export type TProductSelected = { id: TProductId; count: number };

export type TProductSelection = {
  productId: TProductId;
  selectedItems: TProductSelected[];
  setSelected: ({ id, count }: TProductSelected) => void;
};
