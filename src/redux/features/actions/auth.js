import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axiosinstance";

const authThunk = createAsyncThunk("TWO_FACTOR_AUTHENTICATE", async (enteredCode, { rejectWithValue }) => {
  try {
    const authTokn = localStorage.getItem("userAuth");
    if(!authTokn){
      throw new Error("Please login first!");
    }
    const token = JSON.parse(authTokn);
    const response = await instance.post(`/users/${token}/auth/validate`, {
        token: parseInt(enteredCode, 10) 
    });
    const { data } = response;
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.removeItem("userAuth");
    return response.data;
  } catch (error) {
    if(error.response){
      return rejectWithValue(error);
    }
    return rejectWithValue({message: error.message});
  }
  });

  export default authThunk; 