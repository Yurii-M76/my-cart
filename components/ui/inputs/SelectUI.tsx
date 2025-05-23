import { FC } from "react";
import { TSelectUI } from "@/types";
import classes from "./inputs.module.css";

const SelectUI: FC<TSelectUI> = ({
  name,
  label,
  data,
  variant,
  size,
  style,
  onChange,
  error,
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

  const options = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  const errorMessage = error && (
    <span className={classes.errorMessage}>{error}</span>
  );

  return (
    <div className={classNamesInputWrapper}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <select
        id={name}
        key={name}
        name={name}
        style={style}
        className={classNamesInput}
        onChange={onChange}
        {...props}
      >
        <option key={0} value={undefined} />
        {options}
      </select>
      {errorMessage}
    </div>
  );
};

export default SelectUI;
