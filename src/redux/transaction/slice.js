import { createSlice } from "@reduxjs/toolkit";
import {fetchTransactions,addTransaction,deleteTransaction,editTransaction} from "./operations";

const initialState = {
  transactionList: [],
  status: "idle",
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactionList = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactionList.push(action.payload);
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        const updatedTransaction = action.payload;
        const index = state.transactionList.findIndex(
          (transaction) => transaction.id === updatedTransaction.id
        );
        if (index !== -1) {
          state.transactionList[index] = updatedTransaction;
        }
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactionList = state.transactionList.filter(
          (transaction) => transaction.id !== action.payload
        );
      });
  },
});

export default transactionSlice.reducer;