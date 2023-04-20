import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsThunk,
  getCategoriesThunk,
  getOneProductThunk,
  deleteProductThunk,
  updateProductThunk,
} from "../actions/products";
const initialState = {
  products: [],
  loading: false,
  error: { payload: null, status: false },
  selectedProduct: {},
  categories: [],
  productNameToDel: null,
  productIdToDel: null,
  successMsg: null,
  updateDelError: null,
  productToUpdate: null,
  firstPage: false,
  secondPage: false,
  updating: false,
  cotegoriesLoading: false,
  deleting: false,
  response: false,
};
/* istanbul ignore next */
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeSelectedProduct: (state) => {
      state.selectedProduct = {};
    },
    setProductNameToDel: (state, { payload }) => {
      state.productNameToDel = payload.productNameToDel;
    },
    setProductIdToDel: (state, { payload }) => {
      state.productIdToDel = payload.productIdToDel;
    },
    setUpdateDelError: (state, { payload }) => {
      state.updateDelError = payload.updateDelError;
    },
    setSuccessMsg: (state, { payload }) => {
      state.successMsg = payload.successMsg;
    },
    setPages: (state, { payload }) => {
      const { firstPage, secondPage } = payload;
      return { ...state, firstPage, secondPage };
    },
    setProductToUpdate: (state, { payload }) => {
      state.productToUpdate = payload.productToUpdate;
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
          response: true,
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
      state.cotegoriesLoading = true;
    },
    [getCategoriesThunk.rejected]: (state) => {
      state.cotegoriesLoading = false;
      state.error.status = true;
    },
    [getCategoriesThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return {
          ...state,
          cotegoriesLoading: false,
          categories: [...payload.categories],
        };
      } else if (payload.status) {
        return {
          ...state,
          cotegoriesLoading: false,
          error: { payload: payload.status, status: true },
        };
      } else {
        return {
          ...state,
          cotegoriesLoading: false,
          error: { payload: payload, status: true },
        };
      }
    },
    [deleteProductThunk.pending]: (state) => {
      return { ...state, deleting: true };
    },
    [deleteProductThunk.rejected]: (state, { payload }) => {
      const { message } = payload;
      if (message) {
        return {
          ...state,
          deleting: false,
          updateDelError: message,
          successMsg: null,
          productIdToDel: null,
        };
      }
      return {
        ...state,
        deleting: false,
        updateDelError: "Sorry!, something went wrong, try again later!",
        successMsg: null,
        productIdToDel: null,
      };
    },
    [deleteProductThunk.fulfilled]: (state, { payload }) => {
      const { message } = payload;
      const newProducts = state.products.filter(
        (product) => product.id !== state.productIdToDel
      );
      return {
        ...state,
        products: newProducts,
        deleting: false,
        updateDelError: null,
        successMsg: message,
        productIdToDel: null,
      };
    },
    [updateProductThunk.pending]: (state) => {
      state.updating = true;
    },
    [updateProductThunk.rejected]: (state, { payload }) => {
      const { message, status } = payload;
      if (message && status === 400) {
        return {
          ...state,
          updating: false,
          updateDelError: "Sorry!, something went wrong, try again later!",
          successMsg: null,
          productToUpdate: null,
        };
      }
      if (message && !status) {
        return {
          ...state,
          updating: false,
          updateDelError: message,
          successMsg: null,
          productToUpdate: null,
        };
      }
      return {
        ...state,
        updating: false,
        updateDelError: "Sorry!, something went wrong, try again later!",
        successMsg: null,
        productToUpdate: null,
      };
    },
    [updateProductThunk.fulfilled]: (state, { payload }) => {
      const { message, data } = payload;
      const updatedProducts = state.products.map((product) => {
        if (product.id === data.id) {
          return data;
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts,
        updating: false,
        updateDelError: null,
        successMsg: message,
        productToUpdate: null,
      };
    },
  },
});
export const getProduct = (state) => state.product;
export const {
  removeSelectedProduct,
  setProductIdToDel,
  setProductNameToDel,
  setUpdateDelError,
  setSuccessMsg,
  setPages,
  setProductToUpdate,
} = productSlice.actions;
export default productSlice.reducer;
