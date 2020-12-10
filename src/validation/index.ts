import * as yup from "yup";

export const string = (field: string) =>
  yup.string().min(3, `${field} tem que ter no mínimo 3 caracteres`);

export const password = yup
  .string()
  .min(8, `A senha tem que ter no mínimo 8 caracteres`)
  .required("A senha é obrigatória");

export const email = yup
  .string()
  .trim()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Valor inserido não corresponde a um e-mail"
  )
  .required("O e-mail é obrigatório");
