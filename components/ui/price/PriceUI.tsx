import { FC } from "react";
import classes from "./price.module.css";

type TPriceUI = {
  total: string;
  items: { count: number; total: number };
  variant: "cart" | "star";
};

const PriceUI: FC<TPriceUI> = ({ total, items, variant }) => {
  const classNames = [
    classes.price,
    variant === "cart" ? classes.cart : classes.star,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <span>
        <div className={classes.items}>
          {items.count} из {items.total}
        </div>
        <div className={classes.total}>{total} ₽</div>
      </span>
    </div>
  );
};

export default PriceUI;
