import { ReactNode } from "react";

export type TCatalog = {
  totalItems: number;
  totalPrice: string;
  selectedLength: number;
  onProductCreate: () => void;
  onSave: () => void;
  children: ReactNode;
};
