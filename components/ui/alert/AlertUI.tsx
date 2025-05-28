import { CSSProperties, FC, ReactNode } from "react";
import { AlertIconUI } from "../icons";
import { TColorScheme, TVariantScheme } from "@/types";
import classes from "./alert.module.css";

type TAlertUI = {
  children: ReactNode;
  title?: string;
  icon?: boolean;
  color?: Exclude<TColorScheme, "white">;
  variant?: TVariantScheme;
  styles?: CSSProperties | undefined;
};

const AlertUI: FC<TAlertUI> = ({
  title,
  icon,
  color,
  variant,
  styles,
  children,
}) => {
  const classNames = [
    classes.alert,
    color ? classes[color] : classes.dark,
    variant ? classes[variant] : classes.filled,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} style={styles}>
      {icon && <AlertIconUI width={22} height={22} strokeWidth="1.3" />}
      <div className={classes.content}>
        {title && <div className={classes.title}>{title}</div>}
        {children}
      </div>
    </div>
  );
};

export default AlertUI;
