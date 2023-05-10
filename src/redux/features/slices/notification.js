import { createSlice } from "@reduxjs/toolkit";
import { MarkOneNotification, getNotifThunk, MarkAllNotification } from "../actions/notification";

const initialState ={
    notifId: null,
    loading: false,
    notifications: [],
    error: {payload: null, status: false},
    message: {}
}

/* istanbul ignore next */
const notificationSlice = createSlice({
    name: 'nofitications',
    initialState,
    reducers:{
        setTotalNotif: (state, action) => {
            const newNotification = action.payload;
            const exist = state.notifications.some(
                (notification) => notification.id === newNotification.id
            )
            if(!exist){
                state.notifications = [action.payload, ...state.notifications]
            }
        },
        setMarkOneAsRead: (state, {payload}) => {
            state.notifications = state.notifications.filter((notif) => notif.id !== payload[0])
        },
        setMarkAllAsRead: (state, {payload}) => {
            state.notifications = state.notifications.filter((notif) => !payload.includes(notif.id))
            },
        },
    extraReducers: {
        [getNotifThunk.pending]: (state)=>{
            
            state.loading = true
        }, 
        [getNotifThunk.rejected]: (state) => {
            state.loading = false,
            state.error.status = true
        },
        [getNotifThunk.fulfilled]: (state, {payload}) => {
            if(payload.status === 200){
                return { 
                    ...state,
                    loading: false,
                    notifications: payload.notifications.filter((notification) => !notification.read)
                };
            }else if (payload.status){
                return {
                    ...state,
                    loading: false,
                    error: {status: true, payload: payload.status}
                }
            } else {
                return {
                  ...state,
                  loading: false,
                  error: { payload, status: true },
                };
            }
            
        },
        //Mark one notification as read
        [MarkOneNotification.pending]: (state)=>{
            state.loading = true
        }, 
        [MarkOneNotification.rejected]: (state) => {
            state.loading = false,
            state.error.status = true
        },
        [MarkOneNotification.fulfilled]: (state, {payload}) => {
            if(payload.status === 200){
                return { 
                    ...state,
                    loading: false,
                    message: payload
                }
            }else{
                return { 
                    ...state,
                    loading: false,
                    message: payload
                };
            }
        },

        //Mark all notification as read
        [MarkAllNotification.pending]: (state)=>{
            
            state.loading = true
        }, 
        [MarkAllNotification.rejected]: (state) => {
            state.loading = false,
            state.error.status = true
        },
        [MarkAllNotification.fulfilled]: (state, {payload}) => {
            // const newNotif = state.notifications.filter((notif) => !state.notifId.includes(notif.id))
            if(payload.status === 200){
                return { 
                    ...state,
                    loading: false,
                    message: payload,
                }
            }else{
                return { 
                    ...state,
                    loading: false,
                    message: payload
                };
            }
        },
    }
})
export const { 
    setMarkOneAsRead, 
    setMarkAllAsRead, 
    setTotalNotif 
} = notificationSlice.actions
export const getNotifStates = (state) => state.notification;
export default notificationSlice.reducer