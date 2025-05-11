"use client";
import { FC, useState } from "react";
import { useSelector } from "@/store/store";
import { getSelectedProducts } from "@/store/selectedProductsSlice";
import { ActionIconUI, ProductCountUI, StarIconUI } from "../ui";
import CheckIcon from "../ui/icons/CheckIcon";
import { TProductSelection } from "@/types";

const ProductSelection: FC<TProductSelection> = ({
  productId,
  setSelected,
}) => {
  const getSelecteds = useSelector(getSelectedProducts);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState<number>(1);
  const isSelected = getSelecteds.find((item) => item.id === productId);

  const checkHandler = () => {
    setIsActive(!isActive);
    setSelected({ id: productId, count });
  };

  return (
    <>
      {isActive && <ProductCountUI count={count} setCount={setCount} />}

      <ActionIconUI
        size="md"
        variant="circle"
        shadow
        onClick={() => (isActive ? checkHandler() : setIsActive(!isActive))}
      >
        {isActive ? (
          <CheckIcon />
        ) : (
          <StarIconUI fill={isSelected && "var(--color-green)"} />
        )}
      </ActionIconUI>
    </>
  );
};

export default ProductSelection;
