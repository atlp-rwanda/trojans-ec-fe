
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";

export const getStatistic = createAsyncThunk(
    "products/stat",
    async (id) => {
      try {
        const response = await axios.get("/products/stats", {
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

  export const getOrders = createAsyncThunk(
    "products/sales",
    async () => {
      try {
        const response = await axios.get("/sales", {
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
