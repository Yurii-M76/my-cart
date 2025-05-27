import { FC } from "react";
import { PriceUI } from "../price";
import { ActionIconUI } from "../action-icon";
import { CartIconUI, PlusIconUI } from "../icons";
import { TCatalog } from "@/types";
import classes from "./catalog.module.css";

const CatalogUI: FC<TCatalog> = ({
  totalItems,
  totalPrice,
  selectedLength,
  children,
  onProductCreate,
  onSaveCart,
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
          <ActionIconUI
            label="Сохранить"
            size="xl"
            variant="box-br-8"
            outline
            disabled={!selectedLength}
            onClick={onSaveCart}
            shadow
            style={{ color: !selectedLength ? "var(--dimmed)" : undefined }}
          >
            <CartIconUI width={24} height={24} />
          </ActionIconUI>
        </div>
      </div>
    </div>
  );
};

export default CatalogUI;
