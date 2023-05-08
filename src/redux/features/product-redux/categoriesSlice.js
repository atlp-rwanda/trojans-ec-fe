import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    getCategoriesLoading: (state) => {
      return {...state, isLoading:true, error: null};
    },
    getCategoriesSuccess: (state, action) => {
      return {...state, categories: action.payload, isLoading:false, error: null}
    },
    getCategoriesError: (state, action) => {
      return{...state, isLoading:false, error: action.payload}
    },
  },
});

export const { getCategoriesError, getCategoriesLoading,getCategoriesSuccess } = categorySlice.actions;
export default categorySlice.reducer
