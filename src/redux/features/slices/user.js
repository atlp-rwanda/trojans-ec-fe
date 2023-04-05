import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../actions/userLogin";

const initialState = {   
  user: null,
  loading: false,
  error: null, };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.loading = true;
      console.log("Login Pending");
    },
    [loginThunk.rejected]: (state,{payload}) => {
      state.loading = false;
      state.error = {...payload};
      console.log("Rejected");
      // console.log(payload)
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      console.log(payload)
      if(payload.message){
        return { loading: false, user: null,error:payload.message};
      }
      if(payload.token){
        return { loading: false, user: payload.token };
      }
    },
  },
});
export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export const getLoginUser = (state) => state.user;
export default userSlice.reducer;
