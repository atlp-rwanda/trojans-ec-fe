import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axiosinstance";

/* istanbul ignore next */
const paymentSuccessThunk = createAsyncThunk("payment/status", async (id, { rejectWithValue }) => {
  try {
    const response = await instance.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    if(error.response){
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: error.message });
  }
  });

  export default paymentSuccessThunk;