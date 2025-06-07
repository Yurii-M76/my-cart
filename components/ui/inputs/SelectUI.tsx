import { FC } from "react";
import { TSelectUI } from "@/types";
import { ChevronDownIconUI, XIconUI } from "../icons";
import classes from "./inputs.module.css";
import { ActionIconUI } from "../action-icon";

const SelectUI: FC<TSelectUI> = ({
  name,
  label,
  data,
  variant,
  size,
  style,
  error,
  leftSection,
  rightSection,
  clearable,
  onReset,
  value,
  onChange,
  ...props
}) => {
  const classNamesInputSection = [
    classes.inputSection,
    !size ? classes.md : classes[size],
    !variant ? classes.column : classes[variant],
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesSelectWrapper = [
    classes.selectWrapper,
    leftSection && classes.leftIcon,
    !clearable && rightSection && classes.rightIcon,
    error ? classes.inputError : null,
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesSelect = [
    classes.select,
    clearable && classes.clearable,
    leftSection && classes.paddingLeft,
    rightSection && classes.paddingRight,
  ]
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
    <div className={classNamesInputSection}>
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      <div className={classNamesSelectWrapper}>
        {leftSection && (
          <div className={classes["left-section"]}>{leftSection}</div>
        )}
        <select
          id={name}
          key={name}
          name={name}
          style={style}
          className={classNamesSelect}
          onChange={onChange}
          {...props}
        >
          <option key={0} value={undefined} />
          {options}
        </select>
        {!value && (
          <span className={classes.select__arrow_down}>
            <ChevronDownIconUI width={18} height={18} />
          </span>
        )}
        {!clearable && rightSection && (
          <div className={classes["right-section"]}>{rightSection}</div>
        )}
        {clearable && value && (
          <div className={classes["reset-btn"]}>
            <ActionIconUI
              size="sm"
              color="transparent"
              variant="circle"
              onClick={onReset}
            >
              <XIconUI />
            </ActionIconUI>
          </div>
        )}
      </div>
      {errorMessage}
    </div>
  );
};

export default SelectUI;
