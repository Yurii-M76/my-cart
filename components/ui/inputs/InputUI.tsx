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
      {type === "text" ? (
        <input id={name} type="text" className={classes.input} />
      ) : (
        <input
          id={name}
          type="number"
          className={classes.input}
          min={0}
          step={1}
          pattern="[0-9]+([.][0-9]+)?"
        />
      )}
    </div>
  );
};

export default InputUI;
