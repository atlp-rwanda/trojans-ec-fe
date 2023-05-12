import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateSaleThunk = createAsyncThunk(
  "update-sale-status",
  async (data) => {
    try {
      const { id, Status } = data;
      const response = await axios.patch(
        `${process.env.BACKEND_URL}/sales/${id}`,
        {
          Status,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      return error.message;
    }
  }
);

export const getSaleThunk = createAsyncThunk("get-sales-status", async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/sales`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
});
