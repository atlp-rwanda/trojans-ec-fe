import instance from "../../axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersThunk = createAsyncThunk("user/getUsers", async(_,{rejectWithValue})=>{
    try {
      const response = await instance.get(
        `/users`);
      return response.data.users
    } catch (error) {
        if(error.message === 'Network Error'){
          return rejectWithValue(error.message)
        }else{
          return rejectWithValue(error.response.data)
        }
    }
  }) 

//assign role
export const assignUserRoleThunk = createAsyncThunk("user/assignRole", async(userData,{rejectWithValue})=>{
    try {
      const response = await instance.patch(
        `/users/${userData.id}/role`,
        {
          role: userData.role
        }
      );
      return response.data
    } catch (error) {
      console.log('this is: ',error)
        return rejectWithValue(error.response.data)
    }
  }) 