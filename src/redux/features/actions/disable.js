import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axiosinstance'
const disableThunk = createAsyncThunk('user/disable', async (id) => {
  try {
    const result = await axios.post(`/users/${id}/update-status`)
    return { data: result.data, id }
  } catch (error) {
    return { error }
  }
})
export default disableThunk
