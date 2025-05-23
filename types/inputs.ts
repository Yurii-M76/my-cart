import { CSSProperties, SyntheticEvent } from "react";

export type TInputUI = {
  type: "text" | "number";
  name: string;
  label?: string;
  placeholder?: string;
  variant?: "row" | "column";
  size?: "sm" | "md" | "lg" | "full";
  error?: string | undefined;
  style?: CSSProperties | undefined;
};

export type TTextAreaUI = Omit<TInputUI, "type">;

type TSelectData = { label: string; value: string };

export type TSelectUI = Omit<TInputUI, "type" | "placeholder"> & {
  data: TSelectData[];
  onChange: (event: SyntheticEvent<HTMLSelectElement, Event>) => void;
};
