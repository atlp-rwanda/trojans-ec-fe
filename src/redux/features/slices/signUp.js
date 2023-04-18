import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/SignUp";

const initialState = {
  loading: false,
  userInfo: null,
  response: null,
  error: null,
  success: false,
};
/* istanbul ignore next */
const authSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.response = payload;
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default authSlice.reducer;
