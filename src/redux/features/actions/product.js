import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { searchFailure, searchLoading, searchSuccess } from "../slices/product";

export const searchThunk = createAsyncThunk(
  "user/search",
  async (data, thunkAPI) => {
    const params = {};
    if (data.categoryId) {
      params.categoryId = data.categoryId;
    }
    if (data.name) {
      params.product = data.name;
    }
    if (data.price) {
      params.price = data.price;
    }
    if (data.expiryDate) {
      params.expiryDate = data.expiryDate;
    }
    console.log(params);
    if (Object.keys(params).length > 0) {
      thunkAPI.dispatch(searchLoading());
      try {
        const response = await axios.get(
          `${process.env.BACKEND_URL}/products/search`,
          { params }
        );
        thunkAPI.dispatch(searchSuccess(response.data));
        return response.data;
      } catch (error) {
        thunkAPI.dispatch(searchFailure(error.data));
      }
    }
  }
);
