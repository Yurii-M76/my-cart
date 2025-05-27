import { exceptions } from "@/constants";

export const validateLabel = (
  value: string,
  checkIsConflictLabel: () => boolean
) => {
  if (!value) return exceptions.form.required;
  if (checkIsConflictLabel()) return "Наименование уже используется";
  if (value.length < 3) return "Наименование должно быть не менее 3 символов";
  return true;
};

export const validatePrice = (value: number) => {
  if (!value) return exceptions.form.required;
  if (value <= 0) return "Цена должна быть положительным числом";
  return true;
};

export const validateCategory = (value: string) => {
  if (!value) return exceptions.form.required;
  return true;
};
