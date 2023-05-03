import axios from "../../axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSellersFailed, getSellersLoading, getSellersSuccessfull } from "../slices/seller";

export const getSellersThunk = createAsyncThunk("seller-thunk", async (data,thunkAPI) => {
    thunkAPI.dispatch(getSellersLoading())
  try {
    const response = await axios.get("/users/sellers", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    thunkAPI.dispatch(getSellersSuccessfull(response.data.sellers))
    return response.data;
  } catch (error) {
   thunkAPI.dispatch(getSellersFailed(error.response.data))
  }
});
