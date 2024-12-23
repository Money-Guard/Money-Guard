import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionList: [
    {
      transactionDate: "string",
      type: "INCOME",
      categoryId: "string",
      comment: "string",
      amount: 0,
    },
  ],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState: initialState
});


export default transactionSlice.reducer