import { createSlice } from "@reduxjs/toolkit";
import { DeleteNotification } from "../actions/notification";

const initialState ={
    loading: false,
    error: {payload: null, status: false},
    message: {}
}

/* istanbul ignore next */
const delNotificationSlice = createSlice({
    name: 'deleteNotification',
    initialState,
    reducers:{},
    extraReducers: {
        //Delete Notification
        [DeleteNotification.pending]: (state)=>{
            state.loading = true
        }, 
        [DeleteNotification.rejected]: (state) => {
            state.loading = false,
            state.error.status = true
        },
        [DeleteNotification.fulfilled]: (state, {payload}) => {
            if(payload.status === 202){
                return { 
                    ...state,
                    loading: false,
                    message: payload
                }
            } else if (payload.status) {
                return {
                  ...state,
                  loading: false,
                  error: { payload: payload.status, status: true },
                };
              } else {
                return {
                  ...state,
                  loading: false,
                  error: { payload: payload, status: true },
                };
              }
        },
    }
})

export const delNotificationStates = (state) => state.delNotification;
export default delNotificationSlice.reducer