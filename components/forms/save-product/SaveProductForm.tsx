"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/services/store";
import { createProduct, updateProduct } from "@/services/products/actions";
import { loading } from "@/services/products/productsSlice";
import { ButtonUI, InputUI, SelectUI, TextAreaUI } from "@/components/ui";
import { exceptions } from "@/constants";
import {
  TProduct,
  TProductCategories,
  TProductUpdate,
  TSaveProduct,
} from "@/types";

type TInitialState = {
  productName: string;
  description: string;
  categorуId: string;
  price: number;
};

type TSaveProductForm = {
  categories: TProductCategories[];
  updData?: TProduct;
};

const SaveProductForm: FC<TSaveProductForm> = ({ categories, updData }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);

  const initialValues: TInitialState = {
    productName: updData?.label ?? "",
    description: updData?.description ?? "",
    categorуId: updData?.category.id ?? "",
    price: updData?.price ?? 0,
  };

  const { register, getValues, formState, reset, handleSubmit } =
    useForm<TInitialState>({
      defaultValues: initialValues,
    });

  const { isDirty, errors } = formState;

  const onSaveHandler = () => {
    const newProduct: TSaveProduct = {
      label: getValues().productName,
      description: getValues().description,
      categoryId: getValues().categorуId,
      price: +getValues().price,
    };
    dispatch(createProduct(newProduct));
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
      dispatch(updateProduct(productUpdate));
    }
  };

  const onDeleteHandler = () => {
    console.log("delete");
  };

  return (
    <form
      onSubmit={handleSubmit(updData ? onUpdateHandler : onSaveHandler)}
      onReset={() => reset()}
    >
      <InputUI
        type="text"
        label="Наименование"
        size="lg"
        key={"productName"}
        {...register("productName", { required: exceptions.form.required })}
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
        {...register("categorуId", { required: exceptions.form.required })}
        error={errors.categorуId?.message}
      />
      <InputUI
        type="number"
        label="Стоимость за единицу"
        size="lg"
        key={"price"}
        {...register("price", { required: exceptions.form.required })}
        error={errors.price?.message}
      />

      <div className={`formButtons ${updData && "right"}`}>
        {updData && (
          <ButtonUI
            type="button"
            label="Удалить"
            size="sm"
            color="red"
            variant="transparent"
            onClick={onDeleteHandler}
          />
        )}
        <ButtonUI
          type="reset"
          label="Очистить"
          color="gray"
          size="sm"
          disabled={!isDirty}
        />
        <ButtonUI
          type="submit"
          label={updData ? "Обновить" : "Сохранить"}
          color="light-blue"
          size="sm"
          disabled={!isDirty}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default SaveProductForm;
