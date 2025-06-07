import { FC } from "react";
import { BadgeUI } from "../badge";
import { TProductCategories } from "@/types";
import classes from "./product-category-badges.module.css";

type TProductCategoryBadgesUI = {
  categories: TProductCategories[];
  accentCategory: string;
  onFilter: (id: string) => void;
};

const ProductCategoryBadgesUI: FC<TProductCategoryBadgesUI> = ({
  categories,
  accentCategory,
  onFilter,
}) => {
  return (
    <ul className={classes["badge-list"]}>
      {categories.map((category) => (
        <li key={category.id}>
          <BadgeUI
            label={category.label}
            variant="filled"
            color="gray"
            size="sm"
            isActive={category.id === accentCategory}
            onClick={() => onFilter(category.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductCategoryBadgesUI;
