import {
  getCartThunk,
  getSellersThunk,
  addToCartThunk,
  clearCartThunk,
  deleteCartItemThunk,
  updateCartItemThunk,
} from "../actions/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfItems: 0,
  cart: [],
  total: 0,
  loading: false,
  error: { payload: null, status: false },
  sellers: [],
};
/* istanbul ignore next */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getCartThunk.pending]: (state) => {
      state.loading = true;
    },
    [getCartThunk.rejected]: (state) => {
      state.error.status = true;
      state.loading = false;
    },
    [getCartThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        if (typeof payload.cart === "string") {
          return { ...state, loading: false, numberOfItems: 0 };
        } else {
          return {
            ...state,
            loading: false,
            numberOfItems: payload.cart.items.length,
            cart: payload.cart.items,
            total: payload.cart.total,
          };
        }
      } else if (payload.status) {
        return {
          ...state,
          error: { payload: payload.status, status: true },
          loading: false,
        };
      } else {
        return {
          ...state,
          error: { payload, status: true },
          loading: false,
        };
      }
    },
    [addToCartThunk.pending]: (state) => {
      state.loading = true;
    },
    [addToCartThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [addToCartThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 201) {
        return { ...state, loading: false };
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
    [clearCartThunk.pending]: (state) => {
      state.loading = true;
    },
    [clearCartThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [clearCartThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return { ...state, loading: false };
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
    [getSellersThunk.pending]: (state) => {
      state.loading = true;
    },
    [getSellersThunk.rejected]: (state) => {
      state.error.status = true;
      state.loading = false;
    },
    [getSellersThunk.fulfilled]: (state, action) => {
      if (action.payload.status === 200) {
        return {
          ...state,
          loading: false,
          sellers: [...action.payload.sellers],
        };
      } else if (action.payload.status) {
        return {
          ...state,
          error: { payload: action.payload.status, status: true },
          loading: false,
        };
      } else {
        return {
          ...state,
          error: { payload: action.payload, status: true },
          loading: false,
        };
      }
    },
    [deleteCartItemThunk.pending]: (state) => {
      state.loading = true;
    },
    [deleteCartItemThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [deleteCartItemThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return { ...state, loading: false };
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
    [updateCartItemThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateCartItemThunk.rejected]: (state) => {
      state.loading = false;
      state.error.status = true;
    },
    [updateCartItemThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        return { ...state, loading: false };
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
export const getCart = (state) => state.cart;
export default cartSlice.reducer;
