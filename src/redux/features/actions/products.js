import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";
export const getProductsThunk = createAsyncThunk(
  "products/getAsSeller",
  async () => {
    const response = await axios.get("/products");
    return response.data;
  }
);

export const getOneProductThunk = createAsyncThunk(
  "products/getOneAsSeller",
  async (id) => {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  }
);

export const getCategoriesThunk = createAsyncThunk(
  "products/categories",
  async () => {
    const response = await axios.get("/categories");
    return response.data;
  }
);
