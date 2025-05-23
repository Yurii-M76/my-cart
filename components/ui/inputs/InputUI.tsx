import { FC } from "react";
import { TInputUI } from "@/types";
import classes from "./inputs.module.css";

const InputUI: FC<TInputUI> = ({
  type,
  name,
  label,
  placeholder,
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
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      {type === "text" ? (
        <>
          <input
            type="text"
            id={name}
            key={name}
            name={name}
            placeholder={placeholder}
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
            placeholder={placeholder}
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
