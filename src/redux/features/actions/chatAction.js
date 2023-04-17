import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllChats = createAsyncThunk('/chats',async(data)=>{
    try {
      
           return data;
 
   
      } catch (error) {
        return error
      }
})