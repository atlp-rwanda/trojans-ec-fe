import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";
export const getProductsThunk = createAsyncThunk(
  "products/getAsSeller",
  async () => {
    try {
      const response = await axios.get("/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      return error.message;
    }
  }
);

export const getOneProductThunk = createAsyncThunk(
  "products/getOneAsSeller",
  async (id) => {
    try {
      const response = await axios.get(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      return error.message;
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  "products/categories",
  async () => {
    try {
      const response = await axios.get("/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      return error.message;
    }
  }
);
