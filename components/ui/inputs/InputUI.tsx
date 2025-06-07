import { FC } from "react";
import { TInputUI } from "@/types";
import classes from "./inputs.module.css";
import { ActionIconUI } from "../action-icon";
import { XIconUI } from "../icons";

const InputUI: FC<TInputUI> = ({
  type,
  name,
  label,
  placeholder,
  variant,
  size,
  leftSection,
  rightSection,
  error,
  style,
  clearable,
  onReset,
  value,
  ...props
}) => {
  const classNamesInputSection = [
    classes.inputSection,
    !size ? classes.md : classes[size],
    !variant ? classes.column : classes[variant],
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesInputWrapper = [
    classes.inputWrapper,
    leftSection && classes.leftIcon,
    !clearable && rightSection && classes.rightIcon,
    error && classes.inputError,
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesInput = [
    classes.input,
    clearable && classes.clearable,
    leftSection && classes.paddingLeft,
    rightSection && classes.paddingRight,
  ]
    .filter(Boolean)
    .join(" ");

  const errorMessage = error && (
    <span className={classes.errorMessage}>{error}</span>
  );

  return (
    <div className={classNamesInputSection} style={style}>
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      {type === "text" ? (
        <>
          <div className={classNamesInputWrapper}>
            {leftSection && (
              <div className={classes["left-section"]}>{leftSection}</div>
            )}
            <input
              type="text"
              id={name}
              key={name}
              name={name}
              placeholder={placeholder}
              className={classNamesInput}
              {...props}
            />
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
        </>
      ) : (
        <>
          <div className={classNamesInputWrapper}>
            {leftSection && (
              <div className={classes["left-section"]}>{leftSection}</div>
            )}
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
            {!clearable && rightSection && (
              <div className={classes["right-section"]}>{rightSection}</div>
            )}
            {clearable && value ? (
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
            ) : undefined}
          </div>
          {errorMessage}
        </>
      )}
    </div>
  );
};

export default InputUI;
