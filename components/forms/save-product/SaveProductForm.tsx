"use client";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/services/store";
import { createProduct } from "@/services/products/actions";
import { loading } from "@/services/products/productsSlice";
import { findProductCategories } from "@/services/product-categories/actions";
import { getProductCategories } from "@/services/product-categories/productCategoriesSlice";
import { ButtonUI, InputUI, SelectUI, TextAreaUI } from "@/components/ui";
import { exceptions } from "@/constants";
import { TProduct } from "@/types";

type TInitialState = {
  productName: string;
  description: string;
  categorуId: string;
  price: number;
};

type TSaveProductForm = {
  updData?: TProduct;
};

const SaveProductForm: FC<TSaveProductForm> = ({ updData }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector(loading);
  const categories = useSelector(getProductCategories);

  const initialValues: TInitialState = {
    productName: "",
    description: "",
    categorуId: "",
    price: 0,
  };

  const { register, getValues, setValue, formState, reset, handleSubmit } =
    useForm<TInitialState>({
      defaultValues: initialValues,
    });

  const { isDirty, errors, isSubmitSuccessful } = formState;

  const onSaveHandler = () => {
    const newProduct = {
      label: getValues("productName"),
      description: getValues("description"),
      categoryId: getValues("categorуId"),
      price: +getValues("price"),
    };

    dispatch(createProduct(newProduct));
  };

  const onUpdateHandler = () => {
    console.log("update");
  };
  const onDeleteHandler = () => {
    console.log("delete");
  };

  useEffect(() => {
    if (updData) {
      setValue("productName", updData.label);
      setValue("description", updData.description ?? "");
      setValue("categorуId", updData.category.id ?? "");
      setValue("price", updData.price);
    }
  }, [setValue, updData]);

  useEffect(() => {
    if (isSubmitSuccessful && !isLoading) router.push("/catalog");
  }, [isLoading, isSubmitSuccessful, router]);

  useEffect(() => {
    dispatch(findProductCategories());
  }, [dispatch]);

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
