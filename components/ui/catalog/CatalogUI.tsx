import { AddButtonUI } from "../buttons";
import classes from "./catalog.module.css";

const CatalogUI = () => {
  return (
    <>
      <div className={classes.list}>list</div>
      <div className={classes.bottom}>
        <div className={classes.button}>
          <AddButtonUI />
        </div>
        <div className={classes.cart}>
          <div>price</div>
          <div>save</div>
        </div>
      </div>
    </>
  );
};

export default CatalogUI;
