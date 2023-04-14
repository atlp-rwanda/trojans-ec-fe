import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsThunk,
  getCategoriesThunk,
  getOneProductThunk,
} from "../actions/products";
const initialState = {
  products: [],
  loading: false,
  error: false,
  selectedProduct: {},
  categories: [],
};

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
      state.error = false;
      console.log("Products Pending");
    },
    [getProductsThunk.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log("Rejected");
    },
    [getProductsThunk.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        loading: false,
        products: [...payload.products],
        error: false,
      };
    },
    [getOneProductThunk.pending]: (state) => {
      state.loading = true;
      state.error = false;
      console.log("Products Pending");
    },
    [getOneProductThunk.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log("Rejected");
    },
    [getOneProductThunk.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        loading: false,
        selectedProduct: { ...payload.product },
        error: false,
      };
    },
    [getCategoriesThunk.pending]: (state) => {
      state.loading = true;
      console.log("Categories pending");
    },
    [getCategoriesThunk.rejected]: (state) => {
      state.loading = false;
      console.log("Rejected categories");
    },
    [getCategoriesThunk.fulfilled]: (state, { payload }) => {
      console.log("Categories fulfilled");
      if (payload.status === 200) {
        (state.loading = false), (state.categories = [...payload.categories]);
      } else {
        return { ...state, loading: false, error: true };
      }
    },
  },
});
export const getProduct = (state) => state.product;
export const { removeSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
