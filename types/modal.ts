import { ReactNode } from "react";

export type TModal = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  position?: "top" | "center";
  size?: "sm" | "md" | "lg" | "fullScreen";
  children?: ReactNode;
};

export type TModalUI = Omit<TModal, "isOpen"> & { visible: boolean };
