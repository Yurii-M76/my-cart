import { FC } from "react";
import classes from "./loader.module.css";

type TLoaderUI = {
  size?: "sm" | "md" | "lg";
  color?:
    | "white"
    | "dark"
    | "gray"
    | "light-gray"
    | "blue"
    | "light-blue"
    | "green"
    | "carrot"
    | "red";
};

const LoaderUI: FC<TLoaderUI> = ({ size, color }) => {
  const classNames = [
    classes.loader,
    size ? classes[size] : classes.md,
    color ? classes[color] : classes.white,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames} />;
};

export default LoaderUI;
