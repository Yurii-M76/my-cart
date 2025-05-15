import { FC } from "react";
import { SaveButtonUI } from "../buttons";
import { PriceUI } from "../price";
import { ActionIconUI } from "../action-icon";
import { PlusIconUI } from "../icons";
import { TCatalog } from "@/types";
import classes from "./catalog.module.css";

const CatalogUI: FC<TCatalog> = ({
  totalItems,
  totalPrice,
  selectedLength,
  children,
  onProductCreate,
  onSave,
}) => {
  return (
    <div className={classes.catalog}>
      <div className={classes.list}>{children}</div>
      <div className={classes.bottom}>
        <div className={classes.button}>
          <ActionIconUI
            variant="circle"
            size="xl"
            shadow
            onClick={onProductCreate}
          >
            <PlusIconUI fill="var(--color-blue)" />
          </ActionIconUI>
        </div>
        <div className={classes.cart}>
          <PriceUI
            variant="star"
            total={totalPrice}
            items={{ count: selectedLength, total: totalItems }}
          />
          <SaveButtonUI isDisabled={!selectedLength} onClick={onSave} />
        </div>
      </div>
    </div>
  );
};

export default CatalogUI;
