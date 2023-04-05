import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk("user/login", async (user) => {
  try {
    const response = await axios.post(
     "https://trojans-ec-bn-staging.onrender.com/api/v1/users/login",
      {
        email: user.email,
        password: user.password,
      }
    )
    return response.data;
  } catch (error) {
    return error.response.data
  }
  });

 