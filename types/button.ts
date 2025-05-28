import { CSSProperties } from "react";
import { TColorScheme, TSizeScheme, TVariantScheme } from "./ui-scheme";

export type TButtonUI = {
  type: "button" | "submit" | "reset";
  label: string;
  size?: Exclude<TSizeScheme, "xl"> | "full";
  color?: Exclude<TColorScheme, "white">;
  variant?: TVariantScheme;
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties | undefined;
  onClick?: () => void;
};
