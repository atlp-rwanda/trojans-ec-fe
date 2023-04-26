import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategories, setError, setIsLoading } from "../slices/categories";

export const getCategories= createAsyncThunk(
    "Categories", 
    async(formData, thunkApi)=>{
        thunkApi.dispatch(setIsLoading(true));
        thunkApi.dispatch(setError(null))
        try {
            const categories= await axios.get("http://localhost:4000/api/v1/categories");
            thunkApi.dispatch(setIsLoading(false))
            thunkApi.dispatch(setCategories(categories.data.categories))
            return categories.data.categories
        } catch (error) {
            thunkApi.dispatch(setIsLoading(false))
            thunkApi.dispatch(setError(error.response.data.message))
        }
    }
)