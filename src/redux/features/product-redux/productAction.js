import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductFailure,
  addProductLoading,
  addProductSuccess,
} from "./productSlice";
const token= window.localStorage.getItem("token") ? window.localStorage.getItem("token").replace(/"/g, "") : ""
console.log(token)
export const submitForm = createAsyncThunk(
  "add product",
  async (formData, thunkApi) => {
    thunkApi.dispatch(addProductLoading());
    try {
      const addProduct = await axios.post(
        `${process.env.BACKEND_URL}/products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      thunkApi.dispatch(addProductSuccess(addProduct.data));
      return addProduct.data;
    } catch (error) {
      thunkApi.dispatch(addProductFailure(error.response.data.error));
    }
  }
);
