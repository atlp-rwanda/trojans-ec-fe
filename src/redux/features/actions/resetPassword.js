/* eslint-disable no-undef */
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const resetPasswdThunk = createAsyncThunk(
  'user/password-reset',
  async ({ token, password }) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/users/password-reset/${token}`,
        {
          newPassword: password.toString(),
          confirmPassword: password.toString(),
        },
      )
      return response.data
    } catch (error) {
      if (error.response) {
        return error.response.data
      }
      return error.message
    }
  },
)
