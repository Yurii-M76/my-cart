import { FC } from "react";
import { ActionIconUI } from "../action-icon";
import { HomeIconUI } from "../icons";
import classes from "./hello.module.css";

type THelloUI = {
  userName: string;
  welcomeText: string;
  onClickToHome: () => void;
};

const HelloUI: FC<THelloUI> = ({ userName, welcomeText, onClickToHome }) => {
  return (
    <div className={classes.hello}>
      <ActionIconUI
        size="md"
        variant="box-br-12"
        color="dark"
        onClick={onClickToHome}
      >
        <HomeIconUI width={24} height={24} fill="#ffffff" />
      </ActionIconUI>
      <div className={classes.welcome}>
        <span className={classes.welcomeText}>{welcomeText},</span>
        <span className={classes.userName}>{userName}</span>
      </div>
    </div>
  );
};

export default HelloUI;
