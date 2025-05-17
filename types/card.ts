import { ReactNode } from "react";

export type TCard = {
  label: string;
  icon: ReactNode;
  count: number;
  accent: boolean;
  path: string;
};
