"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/services/store";
import { createProduct } from "@/services/products/actions";
import { loading } from "@/services/products/productsSlice";
import { ButtonUI, InputUI, SelectUI, TextAreaUI } from "@/components/ui";
import { exceptions } from "@/constants";

type TInitialState = {
  productName: string;
  description: string;
  category: string;
  price: number;
};

const category = [
  { value: "value1", label: "Electronics" },
  { value: "value2", label: "Fashion" },
  { value: "value3", label: "Home Goods" },
];

const SaveProductForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector(loading);
  const initialValues: TInitialState = {
    productName: "",
    description: "",
    category: "",
    price: 0,
  };

  const { register, getValues, formState, reset, handleSubmit } =
    useForm<TInitialState>({
      defaultValues: initialValues,
    });

  const { isDirty, errors, isSubmitSuccessful } = formState;

  const onSubmit = () => {
    const newProduct = {
      label: getValues("productName"),
      description: getValues("description"),
      price: +getValues("price"),
    };

    dispatch(createProduct(newProduct));
  };

  useEffect(() => {
    if (isSubmitSuccessful && !isLoading) router.push("/catalog");
  }, [isLoading, isSubmitSuccessful, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
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
        data={category}
        size="lg"
        key={"category"}
        {...register("category", { required: exceptions.form.required })}
        error={errors.category?.message}
      />
      <InputUI
        type="number"
        label="Стоимость за единицу"
        size="lg"
        key={"price"}
        {...register("price", { required: exceptions.form.required })}
        error={errors.price?.message}
      />

      <div className="formButtons">
        <ButtonUI
          type="reset"
          label="Очистить"
          color="gray"
          size="sm"
          disabled={!isDirty}
        />
        <ButtonUI
          type="submit"
          label="Сохранить"
          color="blue"
          size="sm"
          disabled={!isDirty}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default SaveProductForm;
