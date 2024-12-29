import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { expenseSchema } from "../../../validations/ExpenseFormVal";
import DatePicker from "react-datepicker";
import { addTransaction } from "../../../redux/transaction/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/transaction/selectors";
import "react-datepicker/dist/react-datepicker.css";
import { closeModal } from "../../../redux/modal/slice";

export default function Index() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const expenseCategories = categories.filter(
    (category) => category.type === "EXPENSE" && category.id
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(expenseSchema),
    defaultValues: {
      amount: "",
      date: new Date(),
      comment: "",
      categoryId: "",
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      transactionDate: data.date.toISOString(),
      type: "EXPENSE",
      categoryId: selectedCategoryId,
      comment: data.comment,
      amount: -data.amount,
    };
    dispatch(addTransaction(formattedData));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          {...register("categoryId")}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
          <option value="">Select Categories</option>
          {expenseCategories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
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

        <div>
          <button type="submit">Save</button>
          <button onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
