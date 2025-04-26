import { FC } from "react";
import classes from "./hello.module.css";

type THelloUI = {
  userName: string;
  welcomeText: string;
};

const HelloUI: FC<THelloUI> = ({ userName, welcomeText }) => {
  return (
    <>
      <span className={classes.welcomeText}>{welcomeText},</span>
      <span className={classes.userName}>{userName}</span>
    </>
  );
};

export default HelloUI;
