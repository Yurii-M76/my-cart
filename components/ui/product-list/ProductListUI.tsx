import { FC, ReactNode } from "react";
import { ProductSelection } from "@/components/product-selection";
import { MarkerUI } from "../marker";
import { ActionIconUI } from "../action-icon";
import { StarOfIconUI } from "../icons";
import { TProduct, TProductSelected } from "@/types";
import classes from "./product-list.module.css";

type TProductListUI = {
  items: TProduct[];
  selectedItems: TProductSelected[];
  children: ReactNode;
  selectedItemsLenght: number;
  onProductSelect: ({ id, count }: TProductSelected) => void;
  onClickItem: (id: string) => void;
  onResetSelectedItems: () => void;
};

const ProductListUI: FC<TProductListUI> = ({
  items,
  selectedItems,
  children,
  selectedItemsLenght,
  onProductSelect,
  onClickItem,
  onResetSelectedItems,
}) => {
  return (
    <div className={classes["product-list"]}>
      {children}
      <div className={classes["header-list"]}>
        <span>
          <strong>Продукты</strong>
        </span>
        <ActionIconUI
          size="md"
          variant="circle"
          shadow
          onClick={onResetSelectedItems}
          disabled={!selectedItemsLenght}
        >
          <StarOfIconUI />
        </ActionIconUI>
      </div>
      <ul className={classes.items}>
        {items.map((item) => (
          <li key={item.id} className={classes.item}>
            <div className={classes.groupRow}>
              <MarkerUI color="blue" size="xl" style={{ marginTop: "3px" }} />
              <div className={classes.title}>
                <div
                  className={classes.label}
                  onClick={() => onClickItem(item.id)}
                >
                  {item.label}
                </div>
                <div className={classes.property}>
                  <span className={classes.price}>{item.price} ₽</span>
                  <span className={classes.category}>
                    {" "}
                    • {item.category.label}
                  </span>
                </div>
              </div>
            </div>

            <ProductSelection
              productId={item.id}
              selectedItems={selectedItems}
              setSelected={onProductSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListUI;
