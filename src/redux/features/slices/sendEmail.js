import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  response: {},
  error: null,
}
export const sendEmailSlice = createSlice({
  name: 'send-Email',
  initialState,
  reducers: {
    sendEmailSuccessfull: (state, action) => {
      return { ...state, loading: false, response: action.payload }
    },
    sendEmailLoading: (state) => {
      return { ...state, loading: true, error: null }
    },
    sendEmailFail: (state, action) => {
      return { ...state, loading: false, error: action.payload }
    },
  },
})

export const {
  sendEmailFail,
  sendEmailLoading,
  sendEmailSuccessfull,
} = sendEmailSlice.actions
