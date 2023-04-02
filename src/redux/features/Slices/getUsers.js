import { createSlice } from "@reduxjs/toolkit";
import  {getUsersThunk}  from "../actions/user";
import { assignUserRoleThunk } from "../actions/user";

const initialState ={
    loading: false,
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
      }
    },
    extraReducers: {
        [getUsersThunk.pending]: (state)=>{
          console.log('get all user pending')
            state.loading = true,
            state.error = false
        }, 
        [getUsersThunk.rejected]: (state, {payload}) => {
            const {status} = payload;
            if(status === 401){
              console.log('get all user rejected')
              return { 
                ...state,
                loading: false,
                error : 'unauthorized to this action require admin privilege'
              }
            }else{
              console.log('get all user rejected')
              return { 
                ...state,
                loading: false,
                error : payload
              }
            }
          },
          [getUsersThunk.fulfilled]: (state, {payload}) => {
            console.log('get all user success')
            return { 
              ...state,
              loading: false,
              users: payload,
            };
          },
        [assignUserRoleThunk.pending]: (state)=>{
          console.log('assign role pending')
          state.loading = true,
          state.error = false
        }, 
        [assignUserRoleThunk.rejected]: (state, {payload}) => {
            console.log('assign role rejected', payload)
            state.loading = false,
            state.error = payload
        },
        [assignUserRoleThunk.fulfilled]: (state, {payload}) => {
            const userToUpdate = state.users.map((user)=>{
              if(user.id === state.userId) {
                return {...user, role: state.role}
              }else{
                return user
              }
            });

            if(userToUpdate){
              console.log('assign role success')
              return {
                ...state,
                loading: false,
                users: userToUpdate,
                role: payload.message
              }
            }
        }
    }
})

export const { setUserData } = usersSlice.actions;
export const getUsers = (state) => state.users;

export default usersSlice.reducer