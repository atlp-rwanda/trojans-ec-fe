import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading: false, 
    response:{},
    error: null
}

export const logOutSlice= createSlice({
    name: "log-out",
    initialState,
    reducers:{
        logOutLoading:(state)=>{
            return {...state, isLoading:true, error: null}
        }, 
        logOutSuccess:(state, action)=>{
            return {...state, isLoading:false, response: action.payload}
        },
        logOutFail:(state, action)=>{
            return{...state, isLoading:false, error:action.payload}
        }
    }
})

export const {logOutFail, logOutLoading, logOutSuccess}= logOutSlice.actions