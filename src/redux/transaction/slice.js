import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "./operations";

const initialState = {
  transactionList: [],
  status: "idle",
  error: null,
  isLoading: true,
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
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default transactionSlice.reducer;
