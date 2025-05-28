import { CSSProperties } from "react";

export type TButtonUI = {
  type: "button" | "submit" | "reset";
  label: string;
  size?: "sm" | "md" | "lg" | "full";
  color?:
    | "white"
    | "dark"
    | "gray"
    | "light-gray"
    | "blue"
    | "light-blue"
    | "green"
    | "carrot"
    | "red";
  variant?: "filled" | "outline" | "transparent";
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties | undefined;
  onClick?: () => void;
};
