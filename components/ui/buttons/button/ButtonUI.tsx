import { CSSProperties, FC } from "react";
import { LoaderUI } from "../../loader";
import classes from "./button.module.css";

type TButtonUI = {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "full";
  color?: "carrot" | "light-blue" | "blue" | "gray";
  variant?: "filled" | "outline" | "transparent";
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties | undefined;
};

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
      {isLoading ? <LoaderUI /> : label}
    </button>
  );
};

export default ButtonUI;
