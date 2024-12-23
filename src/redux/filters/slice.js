import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        date:{
            month:'',
            year:''
        }
}

const filtersSlice = createSlice({
    name:"filters",
    initialState,
    reducers:{
        setDateFilter(state,action){
            try{
                state.date.month = action.payload?.month || '';
                
            }catch(e){
                state.date.month='';
                
            }
            try {
                state.date.year = action.payload?.year || '';
            }
           catch(e){
                state.date.year='';
            }
    }
}})
export const {setDateFilter} = filtersSlice.actions;
export default filtersSlice.reducer