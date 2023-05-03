import { createSlice } from "@reduxjs/toolkit";
import { getStatistic,getOrders } from "../actions/statistic";

const initialState = {
  loading: false,
  response: null,
  error: null,
  success: false,
  isFetchingOrder:false,
  orders:null
};
/* istanbul ignore next */
const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {},
  extraReducers: {
    [getStatistic.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getStatistic.fulfilled]: (state, { payload }) => {
      state.response = payload;
      state.loading = false;
      state.success = true;
    },
    [getStatistic.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getOrders.pending]:(state)=>{
      state.isFetchingOrder=true;
    },
    [getOrders.fulfilled]:(state,{payload})=>{
      state.orders=payload
      state.isFetchingOrder=false;

    },
    [getOrders.rejected]:(state,{payload})=>{
      // state.orders=payload
      state.isFetchingOrder=false
    }
  },
});
export default statisticSlice.reducer;
