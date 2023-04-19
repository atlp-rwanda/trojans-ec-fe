import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/* istanbul ignore next */
export const registerUser = createAsyncThunk('user/signup',async(data)=>{
    try {
        const response = await axios.post(
          // eslint-disable-next-line no-undef
         `${process.env.BACKEND_URL}/users/signup`,
          
         data
          
        )
        return response.data;
      } catch (error) {
        return error
      }
})