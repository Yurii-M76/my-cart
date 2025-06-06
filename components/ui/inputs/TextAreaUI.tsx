import { FC } from "react";
import { TTextAreaUI } from "@/types";
import classes from "./inputs.module.css";

const TextAreaUI: FC<TTextAreaUI> = ({
  name,
  label,
  variant,
  size,
  error,
  leftSection,
  rightSection,
  style,
  ...props
}) => {
  const classNamesTextareaSection = [
    classes.inputSection,
    !size ? classes.md : classes[size],
    !variant ? classes.column : classes[variant],
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesTextareaWrapper = [
    classes.textareaWrapper,
    leftSection && classes.leftIcon,
    rightSection && classes.rightIcon,
    error && classes.inputError,
  ]
    .filter(Boolean)
    .join(" ");

  const classNamesTextarea = [
    classes.textarea,
    leftSection && classes.paddingLeft,
    rightSection && classes.paddingRight,
  ]
    .filter(Boolean)
    .join(" ");

  const errorMessage = error && (
    <span className={classes.errorMessage}>{error}</span>
  );

  return (
    <div className={classNamesTextareaSection} style={style}>
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      <div className={classNamesTextareaWrapper}>
        {leftSection && (
          <div className={classes["left-section"]}>{leftSection}</div>
        )}
        <textarea
          id={name}
          key={name}
          name={name}
          className={classNamesTextarea}
          {...props}
        />
        {rightSection && (
          <div className={classes["right-section"]}>{rightSection}</div>
        )}
      </div>
      {errorMessage}
    </div>
  );
};

export default TextAreaUI;
