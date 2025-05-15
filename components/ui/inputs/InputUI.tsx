import { CSSProperties, FC } from "react";
import classes from "./inputs.module.css";

type TInputUI = {
  type: "text" | "number";
  name: string;
  label: string;
  variant?: "row" | "column";
  size?: "sm" | "md" | "lg" | "full";
  style?: CSSProperties | undefined;
};

const InputUI: FC<TInputUI> = ({ type, name, label, variant, size, style }) => {
  const classNamesInputWrapper = [
    classes.inputWrapper,
    !size ? classes.md : classes[size],
    !variant ? classes.column : classes[variant],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNamesInputWrapper} style={style}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <input id={name} type={type} className={classes.input} />
    </div>
  );
};

export default InputUI;
