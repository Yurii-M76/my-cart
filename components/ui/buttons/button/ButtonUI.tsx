import { CSSProperties, FC } from "react";
import classes from "./button.module.css";

type TButtonUI = {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "full";
  color?: "carrot" | "blue" | "gray";
  disabled?: boolean;
  style?: CSSProperties | undefined;
};

const ButtonUI: FC<TButtonUI> = ({
  type,
  label,
  size,
  color,
  onClick,
  disabled,
  style,
}) => {
  const classNames = [
    classes.button,
    size ? classes[size] : classes.full,
    color ? classes[color] : classes.blue,
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
      {label}
    </button>
  );
};

export default ButtonUI;
