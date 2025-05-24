import { FC, ReactNode } from "react";
import classes from "./save-shopping-list-form.module.css";

type TSaveShoppingListUI = {
  totalPrice: string;
  productsCount: number;
  children: ReactNode;
};

const SaveShoppingListUI: FC<TSaveShoppingListUI> = ({
  totalPrice,
  productsCount,
  children,
}) => {
  return (
    <div className={classes.saveShoppingList}>
      <div className={classes.head}>
        <div className={classes.totalPrice}>
          <span>Сумма</span>
          {totalPrice} ₽
        </div>

        <div className={classes.productsCount}>
          Всего наименований: {productsCount} шт.
        </div>
      </div>

      {children}
    </div>
  );
};

export default SaveShoppingListUI;
