import instance from "../../axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const updatePasswordThunk = createAsyncThunk("user/password-update",
async (password,{rejectWithValue}) => {
    
    try {
        const response = await instance.put(
            `/users/password-update`,
             password 
            );
            
        return response.data;
            
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
}
)