import { CSSProperties, FC, ReactNode } from "react";
import classes from "./action-icon.module.css";

type TActionIconUI = {
  children: ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  variant: "circle" | "box-br-8" | "box-br-12";
  label?: string;
  outline?: boolean;
  color?: "dark" | "light-blue" | "transparent";
  onClick?: () => void;
  shadow?: boolean;
  style?: CSSProperties | undefined;
  disabled?: boolean;
};

const ActionIconUI: FC<TActionIconUI> = ({
  size,
  variant,
  shadow,
  children,
  label,
  outline,
  color,
  onClick,
  style,
  disabled,
}) => {
  const classNames = [
    classes.actionIcon,
    classes[size],
    classes[variant],
    outline ? classes.outline : null,
    color ? classes[color] : classes.white,
    shadow ? classes.shadow : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
      {size === "xl" && label && <span className={classes.label}>{label}</span>}
    </button>
  );
};

export default ActionIconUI;
