import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading: false,
    response:[],
    error:null
}


export const getSalesSlice = createSlice({
    name:"get-sales",
    initialState,
    reducers:{
        getSalesLoading :(state)=>{
            return{...state, isLoading:true, error:null}
        },
        getSaleSuccess : (state, action)=>{
            return {...state, response:action.payload, isLoading:false}
        },
        getSalesFail: (state, action)=>{
            return{...state, error:action.payload, isLoading:false}
        }
    }
})

export const {getSaleSuccess, getSalesFail,getSalesLoading}= getSalesSlice.actions