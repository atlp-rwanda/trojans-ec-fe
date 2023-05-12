import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSalesFail, getSalesLoading, getSaleSuccess } from "../slices/getSales";
import { updateSaleStatusFail, updateSaleStatusLoading, updateSaleStatusSuccess } from "../slices/sales";

export const updateSaleThunk = createAsyncThunk(
  "update-sale-status",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(updateSaleStatusLoading());
    try {
      const response = await axios.patch(
        `${process.env.BACKEND_URL}/sales/${data}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      thunkAPI.dispatch(updateSaleStatusSuccess(response.data))
      return response.data
    } catch (error) {
      thunkAPI.dispatch(updateSaleStatusFail(error.data))
    }
  }
);

export const getSaleThunk = createAsyncThunk ("get-sales-status", async (data, thunkAPI)=>{
  thunkAPI.dispatch(getSalesLoading())
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/sales`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    thunkAPI.dispatch(getSaleSuccess(response.data))
  } catch (error) {
    thunkAPI.dispatch(getSalesFail(error.data))
  }
})
