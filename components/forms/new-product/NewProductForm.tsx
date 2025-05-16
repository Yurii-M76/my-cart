"use client";
import { useForm } from "react-hook-form";
import { ButtonUI, InputUI, SelectUI } from "@/components/ui";
import { exceptions } from "@/constants";

type TInitialState = {
  productName: string;
  category: string;
  price: number | null;
};

const category = [
  { value: "value1", label: "Electronics" },
  { value: "value2", label: "Fashion" },
  { value: "value3", label: "Home Goods" },
];

const NewProductForm = () => {
  const initialValues: TInitialState = {
    productName: "",
    category: "",
    price: null,
  };

  const { register, getValues, formState, reset, handleSubmit } =
    useForm<TInitialState>({
      defaultValues: initialValues,
    });

  const { isDirty, errors } = formState;

  const onSubmit = () => {
    console.log(getValues());
  };

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
        />
      </div>
    </form>
  );
};

export default NewProductForm;
