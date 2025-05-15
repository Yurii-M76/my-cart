import { CSSProperties, FC } from "react";
import classes from "./inputs.module.css";

type TInputUI = {
  type: "text" | "number";
  name: string;
  label: string;
  variant?: "row" | "column";
  size?: "sm" | "md" | "lg" | "full";
  error?: string | undefined;
  style?: CSSProperties | undefined;
};

const InputUI: FC<TInputUI> = ({
  type,
  name,
  label,
  variant,
  size,
  error,
  style,
  ...props
}) => {
  const classNamesInputWrapper = [
    classes.inputWrapper,
    !size ? classes.md : classes[size],
    !variant ? classes.column : classes[variant],
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesInput = [classes.input, error ? classes.inputError : null]
    .filter(Boolean)
    .join(" ");

  const errorMessage = error && (
    <span className={classes.errorMessage}>{error}</span>
  );

  return (
    <div className={classNamesInputWrapper} style={style}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      {type === "text" ? (
        <>
          <input
            type="text"
            id={name}
            key={name}
            name={name}
            className={classNamesInput}
            {...props}
          />
          {errorMessage}
        </>
      ) : (
        <>
          <input
            type="number"
            id={name}
            key={name}
            name={name}
            min={0}
            step={1}
            pattern="[0-9]+([.][0-9]+)?"
            className={classNamesInput}
            {...props}
          />
          {errorMessage}
        </>
      )}
    </div>
  );
};

export default InputUI;
