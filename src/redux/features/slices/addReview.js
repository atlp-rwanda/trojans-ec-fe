import { createSlice } from '@reduxjs/toolkit'
import { addReview } from '../actions/addreview'

const initialState = {
  isLoading: false,
  error: null,
  response: {},
  message: undefined,
}
export const addReviewSlice = createSlice({
  name: 'add-review',
  initialState,
  reducers: {
    addReviewLoading: (state) => {
      return { ...state, isLoading: true, error: null }
    },
    addReviewSuccess: (state, action) => {
      return { ...state, reponse: action.payload }
    },
    addReviewFailure: (state, action) => {
      return { ...state, isLoading: false, error: action.payload }
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addReview.rejected, (state, { payload }) => {
      state.isLoading = false
      state.response = payload.error
      if (payload.error.message.toLowerCase() === 'network error')
        state.message = 'Network Error'
      else {
        console.log({ error: payload.error })
        state.message = payload.error?.response?.data?.message || 'error'
      }
    }),
})

export const {
  addReviewFailure,
  addReviewLoading,
  addReviewSuccess,
} = addReviewSlice.actions
