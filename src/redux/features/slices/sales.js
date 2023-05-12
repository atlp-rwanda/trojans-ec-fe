import { createSlice } from "@reduxjs/toolkit";
import { getSaleThunk } from "../actions/sales";
import { updateSaleThunk } from "../actions/sales";
const initialState = {
  isLoading: false,
  status: null,
  error: { status: false, payload: null },
  statusLoading: false,
  sales: [],
  response: false,
  updatedSale: {},
};

export const saleSlice = createSlice({
  name: "sale-status",
  initialState,
  reducers: {
    updateSaleStatusLoading: (state) => {
      return { ...state, isLoading: true, error: null };
    },
    updateSaleStatusSuccess: (state, action) => {
      return { ...state, response: action.payload, isLoading: false };
    },
    updateSaleStatusFail: (state, action) => {
      return { ...state, error: action.payload, isLoading: false };
    },
  },
  extraReducers: {
    [getSaleThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getSaleThunk.rejected]: (state) => {
      state.isLoading = false;
      state.error.status = true;
    },
    [getSaleThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          isLoading: false,
          sales: [...payload.message],
          statusLoading: false,
          response: true,
        };
      } else if (payload.status) {
        return {
          ...state,
          error: { status: true, payload: payload.status },
          isLoading: false,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: { payload, status: true },
        };
      }
    },
    [updateSaleThunk.pending]: (state) => {
      state.statusLoading = true;
    },
    [updateSaleThunk.rejected]: (state) => {
      state.statusLoading = false;
      state.error.status = true;
    },
    [updateSaleThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          statusLoading: false,
          updatedSale: [...payload.message],
        };
      } else if (payload.status) {
        return {
          ...state,
          error: { status: true, payload: payload.status },
          isLoading: false,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: { payload, status: true },
        };
      }
    },
  },
});

export const {
  updateSaleStatusFail,
  updateSaleStatusLoading,
  updateSaleStatusSuccess,
} = saleSlice.actions;
