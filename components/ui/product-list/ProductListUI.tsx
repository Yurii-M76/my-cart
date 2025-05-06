import { TProduct } from "@/types";
import { MarkerUI } from "../marker";
import { FavoritesButtonUI } from "../buttons";
import classes from "./product-list.module.css";

const ProductListUI = ({
  items,
  setFavorites,
}: {
  items: TProduct[];
  setFavorites: (id: string) => void;
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

          <div className={classes.params}>
            <div className={classes.count}>
              x<span className={classes.count__num}>{item.count}</span>
            </div>

            <FavoritesButtonUI
              active={item.isFavorite}
              onClick={() => setFavorites(item.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductListUI;
