import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/SignUp'

const initialState = {
  loading: false,
  userInfo: null,
  response: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
        console.log("loading");
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
        console.log(payload);
      state.response=payload
      state.loading = false
      state.success = true 
    },
    [registerUser.rejected]: (state, { payload }) => {
        console.log("error");
        console.log(payload);
      state.loading = false
      state.error = payload
    },
  },
})
export default authSlice.reducer