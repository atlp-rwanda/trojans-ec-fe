import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosinstance";
export const getProductsThunk = createAsyncThunk(
  "products/getAsSeller",
  async () => {
    try {
      const response = await axios.get("/products", {
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
  }
);

export const getOneProductThunk = createAsyncThunk(
  "products/getOneAsSeller",
  async (id) => {
    try {
      const response = await axios.get(`/products/${id}`, {
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
  }
);

export const getCategoriesThunk = createAsyncThunk(
  "products/categories",
  async () => {
    try {
      const response = await axios.get("/categories", {
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
  }
);

export const deleteProductThunk = createAsyncThunk(
  "DELETE_PRODUCT",
  async (productId, { rejectWithValue }) => {
    try{
    const resp = await axios.delete(`/products/${productId}`);
    return resp.data;
    }catch (err) {
      if(err.response){
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue({message: err.message});
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  "UPDATE_PRODUCT",
  async (productData, { rejectWithValue }) => {
    try{
      const {productId, updatedProductData } = productData;
      const formData = new FormData();
      updatedProductData.image.forEach((image) => {
        formData.append("image", image);
      });
      formData.append("name", updatedProductData.name);
      formData.append("price", parseInt(updatedProductData.price));
      formData.append("bonus", parseInt(updatedProductData.bonus));
      formData.append("categoryId", parseInt(updatedProductData.categoryId));
      formData.append("expiryDate", updatedProductData.expiryDate);
      formData.append("quantity", parseInt(updatedProductData.quantity));
    const backendResponse = await axios.put(`/products/${productId}`, formData);
    return backendResponse.data;
    }catch (errors) {
      if(errors.response){
        return rejectWithValue(errors.response.data);
      }
      return rejectWithValue({message: errors.message});
    }
  }
);
