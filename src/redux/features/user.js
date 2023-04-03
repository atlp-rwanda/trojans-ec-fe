import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", token: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
