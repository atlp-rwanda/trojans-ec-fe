import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsThunk,
  getCategoriesThunk,
  getOneProductThunk,
} from "../actions/products";
const initialState = {
  products: [],
  loading: false,
  error: { payload: null, status: false },
  selectedProduct: {},
  categories: [],
};
/* istanbul ignore next */
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeSelectedProduct: (state) => {
      state.selectedProduct = {};
    },
  },
  extraReducers: {
    [getProductsThunk.pending]: (state) => {
      state.loading = true;
    },
    [getProductsThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [getProductsThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          loading: false,
          products: [...payload.products],
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
    [getOneProductThunk.pending]: (state) => {
      state.loading = true;
    },
    [getOneProductThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [getOneProductThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          loading: false,
          selectedProduct: { ...payload.product },
        };
      } else if (payload.status) {
        return {
          ...state,
          loading: false,
          error: { payload: payload.status, status: true },
        };
      } else {
        return {
          ...state,
          loading: false,
          error: { payload: payload, status: true },
        };
      }
    },
    [getCategoriesThunk.pending]: (state) => {
      state.loading = true;
    },
    [getCategoriesThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [getCategoriesThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          loading: false,
          categories: [...payload.categories],
        };
      } else if (payload.status) {
        return {
          ...state,
          loading: false,
          error: { payload: payload.status, status: true },
        };
      } else {
        return {
          ...state,
          loading: false,
          error: { payload: payload, status: true },
        };
      }
    },
  },
});
export const getProduct = (state) => state.product;
export const { removeSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
