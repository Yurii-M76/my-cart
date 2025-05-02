import { FC } from "react";
import { TPage } from "@/types";
import classes from "./page.module.css";

const PageUI: FC<TPage> = ({ title, children }) => {
  return (
    <div className="section">
      <div className={classes.pageHeader}>
        <h2>{title}</h2>
        <div>back</div>
      </div>
      {children}
    </div>
  );
};

export default PageUI;
