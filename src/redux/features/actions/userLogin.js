import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axiosinstance'

export const loginThunk = createAsyncThunk('user/login', async (user) => {
  try {
    const response = await axios.post(
      "/users/login",
      {
        email: user.email,
        password: user.password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.removeItem("token");
    const { role, token } = response.data;
    if(role === "admin" || role === "seller"){
      localStorage.setItem("userAuth", token);
    }else{
      localStorage.setItem("token", token);
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: error.message };
  }
})
