import { TProduct } from "@/types";
import classes from "./product-list.module.css";

const ProductListUI = ({ items }: { items: TProduct[] }) => {
  const setFavoriteClasses = (v: boolean) => {
    return [classes.favorite, v ? classes.isFavorite : null]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <ul className={classes.items}>
      {items.map((item) => (
        <li key={item.id} className={classes.item}>
          <div className={classes.title}>
            <div className={classes.label}>{item.label}</div>
            <div className={classes.property}>
              <span className={classes.price}>{item.price} ₽</span>
              <span className={classes.category}> / {item.category}</span>
            </div>
          </div>

          <div className={classes.params}>
            <div className={classes.count}>
              x<span className={classes.count__num}>{item.count}</span>
            </div>
            <button
              type="button"
              className={setFavoriteClasses(item.isFavorite)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductListUI;
