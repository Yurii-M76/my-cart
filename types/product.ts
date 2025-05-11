type TProductId = string;

export type TProduct = {
  id: TProductId;
  label: string;
  price: number;
  category: string;
};

export type TProductSelected = { id: TProductId; count: number };

export type TProductSelection = {
  productId: TProductId;
  setSelected: ({ id, count }: TProductSelected) => void;
};
