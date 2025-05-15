import { CSSProperties, FC, SyntheticEvent } from "react";
import classes from "./inputs.module.css";

type TSelectData = { label: string; value: string };

type TSelectUI = {
  name: string;
  label: string;
  data: TSelectData[];
  onChange: (event: SyntheticEvent<HTMLSelectElement, Event>) => void;
  variant?: "row" | "column";
  size?: "sm" | "md" | "lg" | "full";
  style?: CSSProperties | undefined;
};

const SelectUI: FC<TSelectUI> = ({
  name,
  label,
  data,
  variant,
  size,
  style,
  onChange,
  ...props
}) => {
  const classNamesInputWrapper = [
    classes.inputWrapper,
    !size ? classes.md : classes[size],
    !variant ? classes.column : classes[variant],
  ]
    .filter(Boolean)
    .join(" ");

  const options = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

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
        className={classes.input}
        onChange={onChange}
        {...props}
      >
        <option key={0} value={0} />
        {options}
      </select>
    </div>
  );
};

export default SelectUI;
