import { FC, ReactNode } from "react";
import classes from "./cards.module.css";

type TCardsUI = {
  children: ReactNode;
};

const CardsUI: FC<TCardsUI> = ({ children }) => {
  return (
    <div className="section">
      <div className={classes.cards}>{children}</div>
    </div>
  );
};

export default CardsUI;
