"use client";
import { FC, useState } from "react";
import {
  ActionIconUI,
  CheckIconUI,
  ProductCountUI,
  ProductsSelectionUI,
  StarIconUI,
} from "../ui";
import { TProductSelection } from "@/types";

const ProductSelection: FC<TProductSelection> = ({
  productId,
  selectedItems,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState<number>(1);

  const isSelected: boolean = selectedItems.some(
    (item) => item.id === productId
  );
  const countProductSelected: number =
    selectedItems.find((item) => item.id === productId)?.count || 0;

  const starIsFilled = isSelected ? "var(--color-green)" : undefined;
  const starIcon = <StarIconUI fill={starIsFilled} />;
  const currentIcon = isActive ? <CheckIconUI /> : starIcon;

  const checkHandler = () => {
    setIsActive(false);
    setSelected({ id: productId, count });
  };

  return (
    <ProductsSelectionUI
      isSelected={isSelected}
      countProductSelected={countProductSelected}
    >
      {isActive && !isSelected && (
        <ProductCountUI count={count} setCount={setCount} />
      )}

      <ActionIconUI
        size="md"
        variant="circle"
        shadow
        onClick={() =>
          !isSelected
            ? isActive
              ? checkHandler()
              : setIsActive(true)
            : checkHandler()
        }
      >
        {!isSelected ? currentIcon : starIcon}
      </ActionIconUI>
    </ProductsSelectionUI>
  );
};

export default ProductSelection;
