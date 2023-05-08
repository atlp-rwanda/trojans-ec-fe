import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axiosinstance'
const usersThunk = createAsyncThunk('users', async () => {
  try {
    const result = await axios.get('/users')
    return result.data
  } catch (error) {
    return { error }
  }
})
export default usersThunk
