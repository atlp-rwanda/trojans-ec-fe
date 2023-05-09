import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logOutFail, logOutLoading, logOutSuccess } from "../slices/logout";

export const logOutThunk = createAsyncThunk(
  "log-out",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(logOutLoading());
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/users/logout`,
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
      );
      thunkAPI.dispatch(logOutSuccess(response.data))
    } catch (error) {
        thunkAPI.dispatch(logOutFail(error))
    }
  }
);
