import { CSSProperties } from "react";

export type TMarker = {
  color: "blue" | "accent";
  size: "sm" | "md" | "lg" | "xl";
  style?: CSSProperties | undefined;
};
