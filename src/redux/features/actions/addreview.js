import { createAsyncThunk } from "@reduxjs/toolkit";
import { addReviewLoading } from "../slices/addReview";
import axios from "../../axiosinstance";

export const addReview = createAsyncThunk(
  "review/add",
  async (data, thunkAPI) => {
    console.log(data);
    thunkAPI.dispatch(addReviewLoading());
    try {
      const { rate, id } = data;
      const response = await axios.post(
        `/products/${id}/ratings`,
        { ...rate },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);
