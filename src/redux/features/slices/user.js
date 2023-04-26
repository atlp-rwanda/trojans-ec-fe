import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../actions/userLogin";
import authThunk from "../actions/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,
  gotEmail: false,
  successAuth: false,
  userName: null,
  twoFactorAuthToken: null,
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
    setTwoFactorAuthToken: (state) => {
      return { ...state, twoFactorAuthToken: null };
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
      state.loading = true;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = {...payload};
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      if(payload.message){
        return { ...state, loading: false, user: null, error: payload.message };
      }
      if(payload.token){
        if(payload.randomAuth){
          return {...state, loading: false, twoFactorAuthToken: payload.token, error: null };
        }
        return {...state, loading: false, user: payload.token, error: null };
      }
    },

    [authThunk.pending]: (state) => {
      state.loading = true;
    },
    [authThunk.rejected]: (state, {payload}) => {
      if(payload.response){
        const { status } = payload.response.data;
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
      const { message } = payload;
      if(message){
        return { ...state, loading: false, user: null, error: message, successAuth: false };
      }
      
    },
    [authThunk.fulfilled]: (state, { payload }) => {
      const { token } = payload;
     
      if(token){
        return {...state, loading: false, user: token, twoFactorAuthToken: null, successAuth: true };
      }
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
  setTwoFactorAuthToken,
  setOtpErrors,
  setOtp,
} = userSlice.actions;
export const getLoginUser = (state) => state.user;
export default userSlice.reducer;
