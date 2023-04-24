import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";
/* istanbul ignore next */
export const getCartThunk = createAsyncThunk("cart/get", async () => {
  try {
    const response = await axios.get("/Carts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
});
/* istanbul ignore next */
export const addToCartThunk = createAsyncThunk("cart/add", async (id) => {
  try {
    const response = await axios.post(
      `/Carts/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
});
/* istanbul ignore next */
export const clearCartThunk = createAsyncThunk("cart/clear", async () => {
  try {
    const response = await axios.delete(`/Carts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
});
/* istanbul ignore next */
export const getSellersThunk = createAsyncThunk("cart/getSeller", async () => {
  try {
    const response = await axios.get("/users/sellers", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
});
/* istanbul ignore next */
export const deleteCartItemThunk = createAsyncThunk(
  "cart/deleteItem",
  async (id) => {
    try {
      const response = await axios.put(
        `/Carts/${id}`,
        {
          quantity: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      return error.message;
    }
  }
);
/* istanbul ignore next */
export const updateCartItemThunk = createAsyncThunk(
  "cart/updateItem",
  async ({ id, quantity }) => {
    try {
      const response = await axios.put(
        `/Carts/${id}`,
        {
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
      return error.message;
    }
  }
);
