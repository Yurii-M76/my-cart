import { FC, ReactNode } from "react";
import classes from "./product-selection.module.css";

type TProductsSelectionUI = {
  isSelected: boolean;
  countProductSelected: number;
  children: ReactNode;
};

const ProductsSelectionUI: FC<TProductsSelectionUI> = ({
  isSelected,
  countProductSelected,
  children,
}) => {
  return (
    <div className={classes.productsSelection} style={{ position: "relative" }}>
      {isSelected && (
        <div className={classes.count}>
          x<span className={classes.count__num}>{countProductSelected}</span>
        </div>
      )}

      {children}
    </div>
  );
};

export default ProductsSelectionUI;
