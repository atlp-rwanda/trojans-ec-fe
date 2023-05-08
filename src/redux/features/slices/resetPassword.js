import { createSlice } from '@reduxjs/toolkit'
import { resetPasswdThunk } from '../actions/resetPassword'

const initialState = {
  resetResponse: null,
  loading: false,
  error: { payload: null, status: false },
  message: undefined,
}
/* istanbul ignore next */
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
        state.loading = false
        state.error = { payload: payload.status, status: true }
      } else {
        state.message='Session Has Expired!'
        state.loading = false
        state.error = { payload: payload, status: true }
      }
    },
  },
})
export const { resetStart } = resetSlice.actions
export const getReset = (state) => state.resetPass
export default resetSlice.reducer
