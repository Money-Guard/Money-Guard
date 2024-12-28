export const selectTransactions = state => state.transactions.transactionList;
export const selectStatus = state => state.transactions.status;
export const selectTransactionsIsLoading = state => state.transactions.isLoading;
export const selectTransactionsError = state => state.transactions.error;