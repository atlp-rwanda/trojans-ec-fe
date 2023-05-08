import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axiosinstance";

const authThunk = createAsyncThunk("TWO_FACTOR_AUTHENTICATE", async (enteredCode, { rejectWithValue }) => {
  try {
    const authToken = localStorage.getItem("userAuth");
    if(!authToken){
      throw new Error("Please login first!");
    }
    const response = await instance.post(`/users/${authToken}/auth/validate`, {
        token: parseInt(enteredCode, 10) 
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    localStorage.removeItem("userAuth");
    return response.data;
  } catch (error) {
    if(error.response){
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({message: error.message});
  }
  });

  export default authThunk; 