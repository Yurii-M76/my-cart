import { FC } from "react";
import { ProductList } from "@/components/product-list";
import { SaveButtonUI } from "../buttons";
import { PriceUI } from "../price";
import { ActionIconUI } from "../action-icon";
import { PlusIconUI } from "../icons";
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
        <ProductList items={items} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.button}>
          <ActionIconUI variant="circle" size="xl" shadow>
            <PlusIconUI fill="var(--color-blue)" />
          </ActionIconUI>
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
