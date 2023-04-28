import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    data: [],
    error: null,
    success: false,
    hasNewMessage:false
  }
  
  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setData: (state, action) => {
            
            state.data = action.payload;
        },
        setSingle: (state, action) => {
            state.data = [...state.data,action.payload];
        },
        setHasNewMessages:(state,action)=>{
          state.hasNewMessage=action.payload
        }
    },

  })
export const { setLoading,setData,setSingle,setHasNewMessages } = chatSlice.actions;

  export default chatSlice.reducer