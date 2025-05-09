import { FC } from "react";
import { AddButtonUI, SaveButtonUI } from "../buttons";
import { PriceUI } from "../price";
import { ProductListUI } from "../product-list";
import { TCatalog } from "@/types";
import classes from "./catalog.module.css";

const CatalogUI: FC<TCatalog> = ({
  items,
  totalItems,
  totalPrice,
  selected,
}) => {
  return (
    <div className={classes.catalog}>
      <div className={classes.list}>
        <ProductListUI items={items} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.button}>
          <AddButtonUI />
        </div>
        <div className={classes.cart}>
          <PriceUI
            variant="star"
            total={totalPrice}
            items={{ count: selected, total: totalItems }}
          />
          <SaveButtonUI isDisabled={!selected} />
        </div>
      </div>
    </div>
  );
};

export default CatalogUI;
