import { FC } from "react";
import { AddButtonUI, SaveButtonUI } from "../buttons";
import { ProductListUI } from "../product-list";
import { PriceUI } from "../price";
import { TCatalog } from "@/types";
import classes from "./catalog.module.css";

const CatalogUI: FC<TCatalog> = ({ items }) => {
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
            variant="cart"
            total={1223.9}
            items={{ count: 3, total: 11 }}
          />
          <SaveButtonUI />
        </div>
      </div>
    </div>
  );
};

export default CatalogUI;
