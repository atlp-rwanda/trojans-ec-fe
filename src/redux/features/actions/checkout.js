import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axiosinstance";

const checkoutThunk = createAsyncThunk("payment/checkout", async (data, { rejectWithValue }) => {
  try {
    const response = await instance.post("/payment/checkout");
    return response.data;
    /* istanbul ignore next */
  } catch (error) {
    if(error.response){
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: error.message });
  }
  });

  export default checkoutThunk; 