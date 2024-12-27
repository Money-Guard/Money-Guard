import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {expenseSchema} from "../../../validations/ExpenseFormVal";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { addTransaction, fetchCategories } from "../../../redux/transaction/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/transaction/selectors";

export default function index() {

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories)
  const token = useSelector(state => state.auth.token)
  console.log(categories)

  useEffect(() => {
    dispatch(fetchCategories(token))
  },[dispatch,token])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(expenseSchema) });


  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (addTransactionData) => {
    dispatch(addTransaction(addTransactionData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name="" id="">
          <option value="">Select Categories</option>
          {
            categories?.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))
          }
        </select>
        <div className="flex ">
          <input {...register("sum")} placeholder="0.00" />
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            )}
          />
        </div>
        <input {...register("comment")} placeholder="comment" />
      </form>
    </div>
  );
}
