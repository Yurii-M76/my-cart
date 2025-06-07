import { ReactNode } from "react";
import classes from "./product-list-filters.module.css";

const ProductListFiltersUI = ({ children }: { children: ReactNode }) => {
  return <div className={classes.filters}>{children}</div>;
};

export default ProductListFiltersUI;
