import { createSlice } from '@reduxjs/toolkit'
import usersThunk from '../actions/users'
import disableThunk from '../actions/disable'

const initialState = {
  users: null,
  loading: false,
  error: { message: undefined, status: false },
}
const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [usersThunk.pending]: (state) => {
      state.loading = true
    },
    [usersThunk.rejected]: (state, { payload }) => {
      state.loading = false
      state.error.status = payload.error.response.status || '500'
      state.error.message = payload.error.response.message || 'Server Error'
    },
    [usersThunk.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        state.loading = false
        state.users = payload.users
      } else {
        state.loading = false
        state.error.status = payload.error?.response?.status || '500'
        state.error.message = payload.error?.response?.message || 'Error'
      }
    },
    [disableThunk.fulfilled]: (state, { payload }) => {
      if (payload.data.status === 200) {
        const newUsers = [...state.users]
        const index = newUsers.findIndex((user) => user.id == payload.id)
        if (newUsers[index].status == 'active') {
          newUsers[index].status = 'inactive'
        } else {
          newUsers[index].status = 'active'
        }
        state.users = [...newUsers]
      } else {
        state.loading = false
        state.error.status = payload.error?.response.status || '500'
        state.error.message = payload.error?.response.message || 'Error'
      }
    },
  },
})
export default UsersSlice.reducer
