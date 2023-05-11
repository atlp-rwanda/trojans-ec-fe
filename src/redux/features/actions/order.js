import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";
export const getOrdersThunk = createAsyncThunk(
  "products/getOrders",
  async () => {
    try {
      const response = await axios.get("/orders", {
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

export const getOneOrderThunk = createAsyncThunk(
  "products/getOneOrder",
  async (id) => {
    try {
      const response = await axios.get(`/orders/${id}`, {
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