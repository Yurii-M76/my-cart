"use client";
import { FC, useState } from "react";
import { useSelector } from "@/store/store";
import { getSelectedProducts } from "@/store/selectedProductsSlice";
import { ActionIconUI, CheckIconUI, ProductCountUI, StarIconUI } from "../ui";
import { TProductSelection } from "@/types";

const ProductSelection: FC<TProductSelection> = ({
  productId,
  setSelected,
}) => {
  const getSelecteds = useSelector(getSelectedProducts);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState<number>(1);

  const isSelected = getSelecteds.find((item) => item.id === productId);
  const starIsFilled = isSelected ? "var(--color-green)" : undefined;
  const starIcon = <StarIconUI fill={starIsFilled} />;
  const currentIcon = isActive ? <CheckIconUI /> : starIcon;

  const checkHandler = () => {
    setIsActive(false);
    setSelected({ id: productId, count });
  };

  return (
    <>
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
    </>
  );
};

export default ProductSelection;
