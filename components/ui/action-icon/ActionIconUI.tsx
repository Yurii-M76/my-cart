import { CSSProperties, FC, ReactNode } from "react";
import classes from "./action-icon.module.css";

type TActionIconUI = {
  children: ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  variant: "circle" | "box";
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
  onClick,
  style,
  disabled,
}) => {
  const classNames = [
    classes.actionIcon,
    classes[size],
    classes[variant],
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
    </button>
  );
};

export default ActionIconUI;
