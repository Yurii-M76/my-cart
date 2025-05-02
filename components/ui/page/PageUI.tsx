import { FC } from "react";
import { BackButtonUI } from "../buttons";
import { TPage } from "@/types";
import classes from "./page.module.css";

const PageUI: FC<TPage> = ({ title, children }) => {
  return (
    <div className="section">
      <div className={classes.head}>
        <h2>{title}</h2>
        <BackButtonUI label="Назад" />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default PageUI;
