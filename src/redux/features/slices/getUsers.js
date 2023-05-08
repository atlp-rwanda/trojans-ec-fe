import { createSlice } from "@reduxjs/toolkit";
import disableThunk from "../actions/disable";
import { getUsersThunk } from "../actions/user";
import { assignUserRoleThunk } from "../actions/user";

const initialState = {
  getLoading: false,
  assignLoading: false,
  disableLoading: false,
  disableError: false,
  users: [],
  error: { status: false, payload: null },
  role: null,
  userId: null,
};
/* istanbul ignore next */
const usersSlice = createSlice({
  name: "getUsers",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.userId = payload.id;
      state.role = payload.role;
    },
    changeUserRole: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.id === payload.id) {
          return { ...user, role: payload.role };
        } else {
          return user;
        }
      });
    },
  },
  extraReducers: {
    [getUsersThunk.pending]: (state) => {
      console.log("get all user pending");
      state.getLoading = true;
      state.error = false;
    },
    [getUsersThunk.rejected]: (state, { payload }) => {
      return {
        ...state,
        getLoading: false,
        error: { status: true, payload: payload },
      };
    },
    [getUsersThunk.fulfilled]: (state, { payload }) => {
      console.log("get all user success");
      return {
        ...state,
        getLoading: false,
        users: payload,
      };
    },
    [assignUserRoleThunk.pending]: (state) => {
      console.log("assign role pending");
      state.assignLoading = true;
      state.error = false;
    },
    [assignUserRoleThunk.rejected]: (state, { payload }) => {
      console.log("assign role rejected");
      state.assignLoading = false;
      state.error = payload;
    },
    [assignUserRoleThunk.fulfilled]: (state, { payload }) => {
      console.log("assign role success");
      return {
        ...state,
        assignLoading: false,
        users: state.users,
        role: payload.message,
      };
    },
    [disableThunk.pending]: (state) => {
      state.disableLoading = true;
      state.disableError = false;
    },
    [disableThunk.fulfilled]: (state, { payload }) => {
      state.disableLoading = false;

      if (payload.data.status === 200) {
        const newUsers = [...state.users];
        const index = newUsers.findIndex((user) => user.id == payload.id);
        if (newUsers[index] && newUsers[index]?.status == "active") {
          newUsers[index].status = "inactive";
        } else if (newUsers[index]) {
          newUsers[index].status = "active";
        }
        state.users = [...newUsers];
      } else {
        state.disableError = true;
      }
    },
  },
});
export const { setUserData, changeUserRole } = usersSlice.actions;
export const getUsers = (state) => state.getUsers;
export default usersSlice.reducer;
