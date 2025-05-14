import { FC } from "react";
import { CartIconUI, StarIconUI } from "../icons";
import classes from "./price.module.css";

type TPriceUI = {
  total: string;
  items: { count: number; total: number };
  variant: "cart" | "star";
};

const PriceUI: FC<TPriceUI> = ({ total, items, variant }) => {
  const icon =
    variant === "star" ? (
      <StarIconUI
        width={36}
        height={36}
        fill={!items.count ? "var(--dimmed)" : "var(--color-green)"}
      />
    ) : (
      <CartIconUI width={36} height={36} />
    );

  return (
    <div className={classes.price}>
      <div className={classes.group}>
        {icon}
        <div className={classes.items}>
          {items.count} из {items.total}
        </div>
      </div>
      <div className={classes.total}>{total} ₽</div>
    </div>
  );
};

export default PriceUI;
