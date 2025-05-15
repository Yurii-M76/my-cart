"use client";
import { ButtonUI, InputUI, SelectUI } from "@/components/ui";
import { useForm } from "react-hook-form";

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
  const initialValues = {
    productName: "",
    category: "",
    price: null,
  };

  const { register, getValues, formState, reset, watch, handleSubmit } =
    useForm<TInitialState>({
      defaultValues: initialValues,
    });

  const { isDirty, isValid } = formState;

  console.log(isValid, watch());

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
        {...register("productName", { required: "required" })}
        error=""
      />
      <SelectUI
        label="Категория"
        data={category}
        size="lg"
        key={"category"}
        {...register("category", { required: "required" })}
      />
      <InputUI
        type="number"
        label="Стоимость за единицу"
        size="lg"
        key={"price"}
        {...register("price", { required: "required" })}
        error=""
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
