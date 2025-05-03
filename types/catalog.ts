import { TProduct } from "./product";

export type TCatalog = {
  items: TProduct[];
  totalItems: number;
  totalPrice: string;
  favorites: number;
  setFavotites: (id: string) => void;
};
