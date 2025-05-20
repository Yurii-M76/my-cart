import { CSSProperties, FC } from "react";
import classes from "./inputs.module.css";

type TTextAreaUI = {
  name: string;
  label: string;
  variant?: "row" | "column";
  size?: "sm" | "md" | "lg" | "full";
  error?: string | undefined;
  style?: CSSProperties | undefined;
};

const TextAreaUI: FC<TTextAreaUI> = ({
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

  const classNamesInput = [classes.textarea, error ? classes.inputError : null]
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
      <textarea
        id={name}
        key={name}
        name={name}
        className={classNamesInput}
        {...props}
      />
      {errorMessage}
    </div>
  );
};

export default TextAreaUI;
