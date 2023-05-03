import instance from "../../axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotifThunk = createAsyncThunk("user/notifications", async()=>{
    try {
      const response = await instance.get(
        `/notifications`);
        return response.data
    } catch (error) {
      if(error.response){
        return error.response.data
      }
      return error.message
    }
  })

export const MarkOneNotification = createAsyncThunk("user/MarkOneNotif", async(id)=>{
    try {
      const response = await instance.post(
        `/notifications/${id}`);
        return response.data
    } catch (error) {
      if(error.response){
        return error.response.data
      }
      return error.message
    }
  }) 
  
export const MarkAllNotification = createAsyncThunk("user/MarkAllNotif", async()=>{
    try {
      const response = await instance.post(
        `/notifications`);
        return response.data
    } catch (error) {
      if(error.response){
        return error.response.data
      }
      return error.message
    }
  }) 
  
export const DeleteNotification = createAsyncThunk("user/deleteNotification", async(id)=>{
    try {
      const response = await instance.delete(
        `/notifications/${id}`);
        return response.data
    } catch (error) {
      if(error.response){
        return error.response.data
      }
     
      return error
    }
  }) 