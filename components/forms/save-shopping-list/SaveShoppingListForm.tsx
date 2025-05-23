"use client";
import { useForm } from "react-hook-form";
import { ButtonUI, InputUI } from "@/components/ui";
import { exceptions } from "@/constants";

type TInitialState = {
  listName: string;
};

const SaveShoppingListForm = () => {
  const initialValues: TInitialState = {
    listName: "",
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
        placeholder="Название списка"
        size="full"
        key={"productName"}
        {...register("listName", { required: exceptions.form.required })}
        error={errors.listName?.message}
      />

      <div className="formButtons right">
        <ButtonUI
          type="submit"
          label="Сохранить"
          color="light-blue"
          size="sm"
          disabled={!isDirty}
        />
      </div>
    </form>
  );
};

export default SaveShoppingListForm;
