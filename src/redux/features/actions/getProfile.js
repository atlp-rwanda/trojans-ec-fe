import instance from "../../axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk("user/getProfile", async(_,{rejectWithValue})=>{
    try {
      const response = await instance.get(`/users/profile`);
      return response.data.user
    } catch (error) {
      rejectWithValue(error)
    }
  }) 