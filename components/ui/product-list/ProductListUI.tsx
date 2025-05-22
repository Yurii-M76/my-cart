import { FC } from "react";
import { ProductSelection } from "@/components/product-selection";
import { MarkerUI } from "../marker";
import { TProduct, TProductSelected } from "@/types";
import classes from "./product-list.module.css";

type TProductListUI = {
  items: TProduct[];
  selectedItems: TProductSelected[];
  onProductSelect: ({ id, count }: TProductSelected) => void;
  onClickItem: (id: string) => void;
};

const ProductListUI: FC<TProductListUI> = ({
  items,
  selectedItems,
  onProductSelect,
  onClickItem,
}) => {
  return (
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
                  / {item.categoryId || "без категории"}
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
  );
};

export default ProductListUI;
