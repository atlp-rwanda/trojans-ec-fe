import { createSlice } from "@reduxjs/toolkit";
import paymentSuccessThunk from "../actions/paymentSuccess";
  
  const initialState = {
    loading: false,
    error: null,
    order: null,
  };
  /* istanbul ignore next */
  const paymentSuccessSlice = createSlice({
    name: "paymentSuccess",
    initialState,
    reducers: {},
    extraReducers: {
      [paymentSuccessThunk.pending]: (state) => {
        state.loading = true;
      },
      [paymentSuccessThunk.rejected]: (state, { payload }) => {
        const { message, error } = payload;
          if(message){
            return {
              ...state,
              loading: false,
              error: message,
            };
          };
          if(error){
            return {
              ...state,
              loading: false,
              error: error,
            };
          };     
      },
      [paymentSuccessThunk.fulfilled]: (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: null,
          order: payload.response,
        };
      },
    },
  });
  export const getPaymentSuccess = (state) => state.paymentSuccess;
  export default paymentSuccessSlice.reducer;
  