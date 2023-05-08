import axios from '../../axiosinstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  sendEmailFail,
  sendEmailLoading,
  sendEmailSuccessfull,
} from '../slices/sendEmail'

export const sendEmailThunk = createAsyncThunk(
  'send-email',
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(sendEmailLoading())
      const response = await axios.post('/users/password-reset-request', {
        email: data.email,
      })
      thunkAPI.dispatch(sendEmailSuccessfull(response.data))
      return response.data
    } catch (error) {
        console.log(error)
      thunkAPI.dispatch(sendEmailFail(error.response.data))
    }
  },
)
