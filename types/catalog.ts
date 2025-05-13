import { ReactNode } from "react";

export type TCatalog = {
  totalItems: number;
  totalPrice: string;
  selectedLength: number;
  onSave: () => void;
  children: ReactNode;
};
