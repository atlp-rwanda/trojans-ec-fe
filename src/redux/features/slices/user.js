import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../actions/userLogin";
import authThunk from "../actions/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,
  gotEmail: false,
  successAuth: false,
  twoFactorAuth: false,
  otp: "",
  otpErrors:{
    firstDigitError: null,
    exactLengthError: null,
    isRequiredError: null,
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError: (state, {payload}) => {
      const { error } = payload;
      return { ...state, error };
    },
    setSuccessAuth: (state, {payload}) => {
      const { successAuth } = payload;
      return { ...state, successAuth };
    },
    setGotEmail: (state, {payload}) => {
      const { gotEmail } = payload;
      return { ...state, gotEmail };
    },
    setOtp: (state, {payload}) => {
      const { otp } = payload;
      return { ...state, otp };
    },
    setTwoFactorAuth: (state) => {
      return { ...state, twoFactorAuth: false };
    },
    setUser: (state) => {
      return { ...state, user: null };
    },
    setOtpErrors: (state, {payload}) => {
      const { type, firstDigitError, isRequiredError, exactLengthError} = payload;
      if (type === "SET_FIRST_ERR"){
        const newOtpErrors = { ...state.otpErrors, firstDigitError }
      return { ...state, otpErrors: newOtpErrors};
      }
      if (type === "SET_REQUIRED_ERR") {
        const newOtpErrors = { ...state.otpErrors, isRequiredError }
      return { ...state, otpErrors: newOtpErrors };
      }
      if (type === "SET_LENGTH_ERR"){
        const newOtpErrors = { ...state.otpErrors, exactLengthError }
      return { ...state, otpErrors: newOtpErrors };
      }
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      
      return { ...state, loading: true, user: null };
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = {...payload};
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      if(payload.message){
        return { ...state, loading: false, error: payload.message };
      }
      if(payload.token){
        const { role, token, name, profilePic, email } = payload;
        if(role === "seller" || role === "admin"){
          return {...state, loading: false, twoFactorAuth: true, error: null };
        }
        const newUser = { name, role, profilePic, token, email }
        return {...state, loading: false, user: newUser, error: null };
      }
    },

    [authThunk.pending]: (state) => {
      state.loading = true;
    },
    [authThunk.rejected]: (state, {payload}) => {
      const { status, message } = payload;
      if(status){
        if (status === 400){
          return {
            ...state,
            loading: false,
            error: "Wrong verification code! please check and provide a correct verification code we sent to your email.",
          }
        }
        return {
          ...state,
          loading: false,
          error: "An error occurred while trying to verify your account. Please try again later.",
        }

      }
      if(message){
        return { ...state, loading: false, error: message, successAuth: false };
      }
    },
    [authThunk.fulfilled]: (state, { payload }) => {
      const { role, token, name, profilePic, email } = payload;
      const newUser = { name, role, profilePic, token, email }
      return {...state, loading: false, user: newUser, twoFactorAuth: false, successAuth: true, error: null };
    },

  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setError,
  setGotEmail,
  setSuccessAuth,
  setTwoFactorAuth,
  setOtpErrors,
  setOtp,
  setUser,
} = userSlice.actions;
export const getLoginUser = (state) => state.user;
export default userSlice.reducer;
