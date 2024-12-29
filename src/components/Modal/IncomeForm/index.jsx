import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { incomeSchema } from "../../../validations/IncomeFormVal";
import DatePicker from "react-datepicker";
import { addTransaction } from "../../../redux/transaction/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/transaction/selectors";
import "react-datepicker/dist/react-datepicker.css";
import { closeModal } from "../../../redux/modal/slice";

export default function Index() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const incomeCategories = categories.filter(
    (category) => category.type === "INCOME" && category.id
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(incomeSchema),
    defaultValues: {
      amount: "",
      date: new Date(),
      comment: "",
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      transactionDate: data.date.toISOString(),
      type: "INCOME",
      categoryId: incomeCategories.map(
        (incomeCategorie) => incomeCategorie.id
      )[0],
      comment: data.comment,
      amount: data.amount,
    };

    dispatch(addTransaction(formattedData));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.categoryId && <p>{errors.categoryId.message}</p>}
        <div className="flex">
          <input {...register("amount")} placeholder="0.00" />
          {errors.amount && <p>{errors.amount.message}</p>}

          <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <input {...register("comment")} placeholder="comment" />
        {errors.comment && <p>{errors.comment.message}</p>}

        <div>
          <button type="submit">Save</button>
          <button onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
