import { FC, ReactNode } from "react";
import classes from "./header.module.css";

type THeaderUI = {
  hello: ReactNode;
  profile: ReactNode;
  notification: ReactNode;
};

const HeaderUI: FC<THeaderUI> = ({ hello, profile, notification }) => {
  return (
    <header className={classes.header}>
      <div
        className="section"
        style={{ padding: "0 20px", justifyContent: "center" }}
      >
        <div className={classes.header__items}>
          <div className={classes.hello}>{hello}</div>
          <div className={classes.header__right}>
            <div>{notification}</div>
            <div>{profile}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUI;
