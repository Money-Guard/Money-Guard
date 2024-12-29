import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactionId } from "../../../redux/modal/selectors";
import {
  selectCategories,
  selectTransactions,
} from "../../../redux/transaction/selectors";
import { editTransaction } from "../../../redux/transaction/operations";
import "react-datepicker/dist/react-datepicker.css";
import { editSchema } from "../../../validations/EditSchema";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { closeModal } from "../../../redux/modal/slice";
import { fetchBankCurrency } from "../../../redux/bankApi/operations";

export default function index() {
  const dispatch = useDispatch();
  const transactionId = useSelector(selectTransactionId);
  const transactionList = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const editField = transactionList.find(
    (transaction) => transaction.id === transactionId
  );
  const category = categories.find(
    (category) => category.id === editField.categoryId
  );

  useEffect(() => {
    dispatch(fetchBankCurrency());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editSchema),
    defaultValues: {
      amount: `${Math.abs(editField.amount)}`,
      date: new Date(editField.transactionDate),
      comment: `${editField.comment}`,
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      transactionDate: data.date.toISOString(),
      type: editField.type,
      categoryId: editField.categoryId,
      comment: data.comment,
      amount: editField.type === "INCOME" ? data.amount : -data.amount,
    };

    console.log(formattedData);
    dispatch(
      editTransaction({ transactionId, updateTransaction: formattedData })
    );
    reset();
    dispatch(closeModal());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        <span className={editField.type === "INCOME" ? "text-red-500" : null}>
          Income
        </span>
        /
        <span className={editField.type === "EXPENSE" ? "text-red-500" : null}>
          Expense
        </span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{category.name}</p>

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
                onChange={(date) => {
                  field.onChange(date);
                }}
              />
            )}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <input {...register("comment")} placeholder="comment" />
        {errors.comment && <p>{errors.comment.message}</p>}

        <div className="flex flex-col">
          <button type="submit">Save</button>
          <button onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
