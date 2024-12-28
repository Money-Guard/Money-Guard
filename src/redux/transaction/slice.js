import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "./operations";

const initialState = {
  transactionList: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTransactions
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactionList = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      // addTransaction
      .addCase(addTransaction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactionList.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      // editTransaction
      .addCase(editTransaction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTransaction = action.payload;
        const index = state.transactionList.findIndex(
          (transaction) => transaction.id === updatedTransaction.id
        );
        if (index !== -1) {
          state.transactionList[index] = updatedTransaction;
        }
      })
      .addCase(editTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      // deleteTransaction
      .addCase(deleteTransaction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactionList = state.transactionList.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default transactionSlice.reducer;
