import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    isLoading:false,
    response:{},
    error:null
}


export const saleStatusSlice = createSlice({
    name: "sale-status",
    initialState,
    reducers:{
        updateSaleStatusLoading:(state)=>{
            return {...state, isLoading:true, error:null}
        },
        updateSaleStatusSuccess:(state, action)=>{
            return{...state, response: action.payload, isLoading:false}
        },
        updateSaleStatusFail:(state,action)=>{
            return {...state, error:action.payload, isLoading:false}
        }
    }
})

export const {updateSaleStatusFail,updateSaleStatusLoading,updateSaleStatusSuccess}= saleStatusSlice.actions

