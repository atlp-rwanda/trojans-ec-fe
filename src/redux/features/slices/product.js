import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  searchForm: {
    name: "",
    categoryId: "",
    price: "",
  },
  searched: {},
};

export const searchSlice = createSlice({
  name: "search-product",
  initialState,
  reducers: {
    searchLoading: (state) => {
      return { ...state, isLoading: true, error: null };
    },
    searchSuccess: (state, action) => {
      return { ...state, searched: action.payload, isLoading: false };
    },
    searchFailure: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    updateSearchForm: (state, action) => {
      return {
        ...state,
        searchForm: { ...state.searchForm, ...action.payload },
      };
    },
  },
});

export const { searchSuccess, searchFailure, searchLoading, updateSearchForm } =
  searchSlice.actions;
