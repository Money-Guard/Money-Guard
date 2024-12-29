import { createSlice } from "@reduxjs/toolkit";
import { fetchBankCurrency } from "./operations";


const bankApiSlice = createSlice({
    name: "bankApi",
    initialState: {
        currency : []
    },
    extraReducers: (builder => {
        builder.addCase(fetchBankCurrency.fulfilled, (state, action) => {
            state.currency = action.payload
        })
    })
})


export default bankApiSlice.reducer;