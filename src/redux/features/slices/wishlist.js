import { createSlice } from "@reduxjs/toolkit";
import { addWishListThunk } from "../actions/wishlist";
import { getWishListThunk } from "../actions/wishlist";
import { getSellersThunk } from "../actions/wishlist";

const initialState = {
addedWish:[],
added:false,
sellers:[],
wishlist: [],
loading: false,
error:  { payload: null, status: false },
};
/* istanbul ignore next */
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: {
    [addWishListThunk.pending]: (state) => {
        state.loading = true;
      },
      [addWishListThunk.rejected]: (state) => {
        state.error.status = true;
        state.loading = false;
      },
      [addWishListThunk.fulfilled]: (state, { payload }) => {
        if (payload.response.status === 201){
            console.log("fulfilled")
            if(payload.response.message === "added to ProductWishes"){
                return{
                    ...state,
                    addedWish:[...state.addedWish,payload.productId],
                    loading:false,
                    added:true,
                }
            }else{
                return{
                    ...state,
                    loading:false,
                    added:false,
                    addedWish:state.addedWish.filter((wishProduct)=>{
                      return wishProduct !== payload.productId
                    })
                }
            }
        } else if (payload.status) {
          return {
            ...state,
            error: { payload: payload.status, status: true },
            loading: false,
          };
        } else {
          return {
            ...state,
            error: { payload, status: true},
            loading: false,
          };
        }
      },
      [getWishListThunk.pending]: (state) => {
        state.loading = true;
      },
      [getWishListThunk.rejected]: (state) => {
        state.error.status = true;
        state.loading = false;
      },
      [getWishListThunk.fulfilled]: (state, { payload }) => {
        if (payload.status === 200) {
            console.log("fulfilled")
                return{
                    ...state,
                    loading:false,
                    wishlist:payload.data,
                    addedWish:payload.data.map((wish)=>{
                      return wish.product.id
                    })
                }
       
        } else if (payload.status) {
          return {
            ...state,
            error: { payload: payload.status, status: true },
            loading: false,
          };
        } else {
          return {
            ...state,
            error: { payload, status: true },
            loading: false,
          };
        }
      },
      [getSellersThunk.pending]: (state) => {
        state.loading = true;
      },
      [getSellersThunk.rejected]: (state) => {
        state.error.status = true;
        state.loading = false;
      },
      [getSellersThunk.fulfilled]: (state, {payload}) => {
        if (payload.status === 200) {
          return {
            ...state,
            loading: false,
            sellers: [...payload.sellers],
          };
        } else if (payload.status) {
          return {
            ...state,
            error: { payload: payload.status, status: true },
            loading: false,
          };
        } else {
          return {
            ...state,
            error: { payload: payload, status: true },
            loading: false,
          };
        }
      },
  },
});

export const getWishList = (state) => state.wishlist;
export default wishlistSlice.reducer;
