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
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: error.message };
  }
})
