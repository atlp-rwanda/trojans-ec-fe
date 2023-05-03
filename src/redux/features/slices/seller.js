import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    loading:false,
    response:[],
    error:null
};

export const sellerSlice= createSlice({
    name:"seller-slice",
    initialState,
    reducers:{
        getSellersLoading: (state)=>{
            return {...state, loading: true, error: null}
        }, 
        getSellersSuccessfull: (state, action)=>{
            return {...state, loading:false, response: action.payload}
        },
        getSellersFailed: (state, action)=>{
            return {...state, loading:false, error: action.payload}
        }
    },
})

export const {getSellersFailed, getSellersLoading, getSellersSuccessfull}= sellerSlice.actions