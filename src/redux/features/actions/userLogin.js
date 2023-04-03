import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";

export const loginThunk = createAsyncThunk("user/login", async (user) => {
  try {
    const response = await axios.post("/users/login", {
      email: user.email,
      password: user.password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});
