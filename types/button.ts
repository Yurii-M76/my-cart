import { CSSProperties } from "react";

export type TButtonUI = {
  type: "button" | "submit" | "reset";
  label: string;
  size?: "sm" | "md" | "lg" | "full";
  color?: "carrot" | "light-blue" | "blue" | "red" | "gray";
  variant?: "filled" | "outline" | "transparent";
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties | undefined;
  onClick?: () => void;
};