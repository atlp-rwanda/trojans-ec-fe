import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../actions/getProfile";
import { updateProfileThunk } from "../actions/updateProfile";

const initialState = {   
    userProfile: [],
    userStatus: null,
    loading: false,
    updateStatus: [],
    error: null, 
  };
  
const profileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
    },
    extraReducers: {

      //get Profile
      [getUserProfile.pending]: (state) => {
        console.log('get profile pending')
        return { 
          ...state,
          userProfile: null,
          userStatus: "pending",
        }
      },
      [getUserProfile.rejected]: (state, {payload}) => {
        console.log(payload)
        return { 
          ...state,
          userProfile: [],
          userStatus: null,
          error : payload
        }
      },
      [getUserProfile.fulfilled]: (state, {payload}) => {
        return { 
          ...state,
          userProfile: payload,
          userStatus: null
        };
      },

      //update user profile
      [updateProfileThunk.pending]: (state) => {
        return{
          ...state,
          loading: true
        }
      },
      [updateProfileThunk.rejected]: (state, {payload}) => {
        console.log('update rejected')
        return{
          ...state,
          loading: false,
          error : payload.message
        }
      },
      [updateProfileThunk.fulfilled]: (state, { payload }) => {
        
        return { 
          ...state,
          loading: false,
          updateStatus: payload.message 
        };
      },
      },
      
    });
  
  export const userProfileUpdate = (state) => state.userProfile;
  export default profileSlice.reducer;
  