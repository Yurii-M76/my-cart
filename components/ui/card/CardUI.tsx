import { FC } from "react";
import classes from "./card.module.css";

type TCardUI = {
  label: string;
  icon: string;
  count: number;
};

const CardUI: FC<TCardUI> = ({ label, icon, count }) => {
  return (
    <div className="section">
      <div className={classes.card}>
        <div
          className={classes.icon}
          style={{ backgroundImage: `url(${icon})` }}
        ></div>
        <div className={classes.label}>{label}</div>
        {count > 0 && (
          <div className={classes.count}>
            {count}
            <span className={classes.marker}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardUI;
