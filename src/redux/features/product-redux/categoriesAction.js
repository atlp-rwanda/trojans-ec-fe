import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesError, getCategoriesSuccess, getCategoriesLoading } from "./categoriesSlice";

export const getCategories= createAsyncThunk(
    "Categories", 
    async(formData, thunkApi)=>{
        thunkApi.dispatch(getCategoriesLoading(true));
        try {
            const categories= await axios.get(`${process.env.BACKEND_URL}/categories`);
            thunkApi.dispatch(getCategoriesSuccess(categories.data.categories))
            console.log(categories)
            return categories.data.categories
        } catch (error) {
            thunkApi.dispatch(getCategoriesError(error.response.data.message))
        }
    }
)