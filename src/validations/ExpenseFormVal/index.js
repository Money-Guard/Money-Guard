import * as yup from "yup";

export const expenseSchema = yup
  .object({
    sum: yup
      .number("Sayı Gir")
      .required("ekleyeceksen burasi dolacak"),
    date: yup
      .date()
      .required("date zorunlu haci"),
    comment: yup
    .string()
    .required("burayi da doldur bakem")
  })
  .required();
