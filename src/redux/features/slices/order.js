import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk, getOneOrderThunk } from "../actions/order";
const initialState = {
  orders: [],
  loading: false,
  error: { payload: null, status: false },
  selectedOrder: {},
  selectLoading: false,
  response: false,
};
/* istanbul ignore next */
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrdersThunk.pending]: (state) => {
      state.loading = true;
    },
    [getOrdersThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [getOrdersThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          loading: false,
          response: true,
          orders: [...payload.response],
        };
      } else if (payload.status) {
        return {
          ...state,
          error: { status: true, payload: payload.status },
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: { payload, status: true },
        };
      }
    },
    [getOneOrderThunk.pending]: (state) => {
      state.selectLoading = true;
    },
    [getOneOrderThunk.rejected]: (state) => {
      state.selectLoading = false;
      state.error.status = true;
    },
    [getOneOrderThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          selectedOrder: payload.response,
          selectLoading: false,
        };
      } else if (payload.status) {
        return {
          ...state,
          error: { status: true, payload: payload.status },
          selectLoading: false,
        };
      } else {
        return {
          ...state,
          selectLoading: false,
          error: { payload, status: true },
        };
      }
    },
  },
});
export default orderSlice.reducer;