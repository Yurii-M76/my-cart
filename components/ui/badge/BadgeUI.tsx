import { FC } from "react";
import { TColorScheme, TSizeScheme, TVariantScheme } from "@/types";
import classes from "./badge.module.css";

type TBadgeUI = {
  label: string;
  color?: TColorScheme;
  variant?: Exclude<TVariantScheme, "transparent">;
  size?: Exclude<TSizeScheme, "xl">;
  isActive?: boolean;
  onClick?: () => void;
};

const BadgeUI: FC<TBadgeUI> = ({
  label,
  color,
  size,
  variant,
  isActive,
  onClick,
}) => {
  const classNames = [
    classes.badge,
    color ? classes[color] : classes.white,
    variant ? classes[variant] : classes.filled,
    size ? classes[size] : classes.md,
    isActive && classes.isActive,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} onClick={onClick}>
      <span className={classes.label}>{label}</span>
    </div>
  );
};

export default BadgeUI;
