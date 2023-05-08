import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";

export const addWishListThunk = createAsyncThunk("products/addWishlist", async (id) => {
  try {
    const response = await axios.post("/productWishes", {
      product_id: id,
    },{headers:`Bearer${localStorage.getItem("token")}`});
    return {response:response.data, productId:id};
  } catch (error) {
   return error.response ? error.response.data : error.message;
  }
});
/* istanbul ignore next */
export const getSellersThunk = createAsyncThunk("cart/getSeller", async () => {
  try {
    const response = await axios.get("/users/sellers");
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error.message;
  }
});
export const getWishListThunk = createAsyncThunk("products/getWishlist", async () => {
    try {
      const response = await axios.get("/productWishes");
      return response.data;
    } catch (error) {
     return error.response ? error.response.data : error.message;
    }
  });
  