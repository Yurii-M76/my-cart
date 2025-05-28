import { FC } from "react";
import { LoaderUI } from "../../loader";
import { TButtonUI } from "@/types";
import classes from "./button.module.css";

const ButtonUI: FC<TButtonUI> = ({
  type,
  label,
  size,
  color,
  variant,
  onClick,
  disabled,
  isLoading,
  style,
}) => {
  const classNames = [
    classes.button,
    size ? classes[size] : classes.full,
    color ? classes[color] : classes.lightBlue,
    variant ? classes[variant] : classes.filled,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
      style={style}
    >
      {isLoading ? (
        <LoaderUI color={!variant || variant === "filled" ? "white" : color} />
      ) : (
        label
      )}
    </button>
  );
};

export default ButtonUI;
