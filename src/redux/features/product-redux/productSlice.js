import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: {},
  isLoading: false,
  error: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductLoading: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },
    addProductSuccess: (state, action) => {
      return { ...state, isLoading: false, message: action.payload };
    },
    addProductFailure: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export const { addProductFailure, addProductLoading, addProductSuccess } =
  productSlice.actions;
