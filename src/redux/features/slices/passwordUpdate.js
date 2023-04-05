import { createSlice } from "@reduxjs/toolkit";
import { updatePasswordThunk } from "../actions/updatePassword";

const initialState = {
    loading: false,
    updateStatus: null,
    error: null,
}

const passwordSlice = createSlice({
    name: "updatePassword",
    initialState,
    reducers: {

    },
    extraReducers: {

        [updatePasswordThunk.pending]: (state) => {
          console.log("pending")
            return{
              ...state,
              loading: true
            }
          },
          [updatePasswordThunk.rejected]: (state, {payload}) => {
            console.log('update rejected')
            return{
              ...state,
              loading: false,
              error : payload.message
            }
          },
          [updatePasswordThunk.fulfilled]: (state, { payload }) => {
            return { 
              ...state,
              loading: false,
              updateStatus: payload.message 
            };
          },

    }
})
export const passwordUpdate = (state) => state.updatePassword;
export default passwordSlice.reducer;