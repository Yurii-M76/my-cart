"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ButtonUI, InputUI, SelectUI, TextAreaUI } from "@/components/ui";
import { validateCategory, validateLabel, validatePrice } from "./validation";
import {
  TProduct,
  TProductCategories,
  TProductUpdate,
  TSaveProduct,
  TStatusThunk,
} from "@/types";

type TInitialState = {
  productName: string;
  description: string;
  categorуId: string;
  price: number;
};

type TSaveProductForm = {
  categories: TProductCategories[];
  status: TStatusThunk;
  products?: TProduct[];
  updData?: TProduct;
  errorMessage?: string | null | undefined;
  onSave: (data: TSaveProduct) => void;
  onUpdate: (data: TProductUpdate) => void;
  onDelete: () => void;
};

const SaveProductForm: FC<TSaveProductForm> = ({
  categories,
  status,
  products,
  updData,
  errorMessage,
  onSave,
  onUpdate,
  onDelete,
}) => {
  const initialValues: TInitialState = {
    productName: updData?.label ?? "",
    description: updData?.description ?? "",
    categorуId: updData?.category.id ?? "",
    price: updData?.price ?? 0,
  };

  const {
    register,
    getValues,
    formState,
    reset,
    handleSubmit,
    watch,
    setValue,
  } = useForm<TInitialState>({
    defaultValues: initialValues,
  });

  const { isDirty, errors } = formState;

  const checkIsConflictLabel = (): boolean => {
    const productName = watch().productName;
    return productName.length >= 3 &&
      products &&
      products.some(
        (item) => item.label === productName && item.id !== updData?.id
      )
      ? true
      : false;
  };

  const onSaveHandler = () => {
    const newProduct: TSaveProduct = {
      label: getValues().productName,
      description: getValues().description,
      categoryId: getValues().categorуId,
      price: +getValues().price,
    };
    onSave(newProduct);
  };

  const onUpdateHandler = () => {
    if (updData) {
      const productUpdate: TProductUpdate = {
        id: updData.id,
        label: getValues().productName,
        description: getValues().description,
        categoryId: getValues().categorуId,
        price: +getValues().price,
      };
      onUpdate(productUpdate);
    }
  };

  const onDeleteHandler = () => {
    if (updData) {
      onDelete();
    }
  };

  const onResetHandler = () => {
    reset();
    setValue("productName", "");
    setValue("categorуId", "");
    setValue("price", 0);
  };

  return (
    <form
      onSubmit={handleSubmit(updData ? onUpdateHandler : onSaveHandler)}
      onReset={onResetHandler}
      noValidate
    >
      <InputUI
        type="text"
        label="Наименование"
        size="lg"
        key={"productName"}
        {...register("productName", {
          validate: (value) => validateLabel(value, checkIsConflictLabel),
        })}
        error={errors.productName?.message}
      />
      <TextAreaUI
        label="Описание"
        size="lg"
        key={"description"}
        {...register("description")}
      />
      <SelectUI
        label="Категория"
        data={categories.map((item) => ({
          value: item.id,
          label: item.label,
        }))}
        size="lg"
        key={"categorуId"}
        {...register("categorуId", {
          validate: (value) => validateCategory(value),
        })}
        error={errors.categorуId?.message}
      />
      <InputUI
        type="number"
        label="Стоимость за единицу"
        size="lg"
        key={"price"}
        {...register("price", {
          validate: (value) => validatePrice(value),
        })}
        error={errors.price?.message}
      />

      {errorMessage && <span className="error">{errorMessage}</span>}

      <div className={"formButtons right"}>
        {updData && (
          <ButtonUI
            type="button"
            label="Удалить"
            size="sm"
            color="red"
            variant="outline"
            onClick={onDeleteHandler}
            isLoading={status.delete.loading}
          />
        )}
        <ButtonUI
          type="reset"
          label="Очистить"
          color="light-gray"
          size="sm"
          disabled={updData ? false : !isDirty}
        />
        <ButtonUI
          type="submit"
          label={updData ? "Обновить" : "Сохранить"}
          color="dark"
          size="sm"
          disabled={!isDirty}
          isLoading={updData ? status.update.loading : status.create.loading}
        />
      </div>
    </form>
  );
};

export default SaveProductForm;
