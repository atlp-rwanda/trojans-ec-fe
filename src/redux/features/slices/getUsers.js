import { createSlice } from "@reduxjs/toolkit";
import  {getUsersThunk}  from "../actions/user";
import { assignUserRoleThunk } from "../actions/user";

const initialState ={
    getLoading: false,
    assignLoading: false,
    users: [],
    error: false,
    role: null,
    userId: null
}

/* istanbul ignore next */
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
      setUserData : (state, {payload})=>{
        state.userId = payload.id
        state.role = payload.role
      },
      changeUserRole : (state, {payload})=>{
         state.users = state.users.map((user)=>{
          if(user.id === payload.id) {
            return {...user, role: payload.role}
          }else{
            return user
          }
        });
      }
    },
    extraReducers: {
        [getUsersThunk.pending]: (state)=>{
          console.log('get all user pending')
            state.getLoading = true,
            state.error = false
        }, 
        [getUsersThunk.rejected]: (state, {payload}) => {
              return { 
                ...state,
                getLoading: false,
                error : payload
              }
            
          },
          [getUsersThunk.fulfilled]: (state, {payload}) => {
            console.log('get all user success')
            return { 
              ...state,
              getLoading: false,
              users: payload,
            };
          },
        [assignUserRoleThunk.pending]: (state)=>{
          console.log('assign role pending')
          state.assignLoading = true,
          state.error = false
        }, 
        [assignUserRoleThunk.rejected]: (state, {payload}) => {
            console.log('assign role rejected')
            state.assignLoading = false,
            state.error = payload
        },
        [assignUserRoleThunk.fulfilled]: (state, {payload}) => {

              console.log('assign role success')
              return {
                ...state,
                assignLoading: false,
                users: state.users,
                role: payload.message
              }
        }
    }
})

export const { setUserData, changeUserRole } = usersSlice.actions;
export const getUsers = (state) => state.users;
export default usersSlice.reducer