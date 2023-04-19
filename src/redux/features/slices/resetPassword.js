import { createSlice } from '@reduxjs/toolkit'
// import ResetPasswd from '../../../pages/password/passwd-reset'
import { resetPasswdThunk } from '../actions/resetPassword'

const initialState = {
  resetResponse: null,
  loading: false,
  error: { payload: null, status: false },
  message: undefined,
}
const resetSlice = createSlice({
  name: 'resetPass',
  initialState,
  reducers: {},
  extraReducers: {
    [resetPasswdThunk.pending]: (state) => {
      state.loading = true
    },
    [resetPasswdThunk.rejected]: (state) => {
      state.loading = false
      state.error.status = true
    },
    [resetPasswdThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        state.loading = false
        state.message = 'Password updated'
      } else if (payload.status) {
        console.log({ payload1: payload })
        state.loading = false
        state.error = { payload: payload.status, status: true }
      } else {
        state.message='Session Has Expired!'
        console.log({ payload2: payload })
        state.loading = false
        state.error = { payload: payload, status: true }
      }
    },
  },
})
export const { resetStart } = resetSlice.actions
export const getReset = (state) => state.resetPass
export default resetSlice.reducer
