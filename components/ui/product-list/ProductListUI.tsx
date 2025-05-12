import { ProductSelection } from "@/components/product-selection";
import { MarkerUI } from "../marker";
import { TProduct, TProductSelected } from "@/types";
import classes from "./product-list.module.css";

const ProductListUI = ({
  items,
  selectHandler,
}: {
  items: TProduct[];
  selectHandler: ({ id, count }: TProductSelected) => void;
}) => {
  return (
    <ul className={classes.items}>
      {items.map((item) => (
        <li key={item.id} className={classes.item}>
          <div className={classes.groupRow}>
            <MarkerUI color="blue" size="xl" style={{ marginTop: "3px" }} />
            <div className={classes.title}>
              <div className={classes.label}>{item.label}</div>
              <div className={classes.property}>
                <span className={classes.price}>{item.price} ₽</span>
                <span className={classes.category}> / {item.category}</span>
              </div>
            </div>
          </div>

          <ProductSelection productId={item.id} setSelected={selectHandler} />
        </li>
      ))}
    </ul>
  );
};

export default ProductListUI;
