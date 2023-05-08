import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";

export const registerUser = createAsyncThunk('user/signup',async(data)=>{
    try {
        const response = await axios.post(`/users/signup`, data)
        return response.data;
      } catch (error) {
        /* istanbul ignore next */
        return error
      }
})