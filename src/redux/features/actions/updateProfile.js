import instance from "../../axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfileThunk = createAsyncThunk("user/profileUpdate", async (profile, 
  {rejectWithValue}) => {
    try {      
      const response = await instance.patch(
        `/users/profile`,profile);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  });