import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../data/userData";

const initialState = {
  users: Data,
  firstname: "",
  lastname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSrchChange: (state, action) => {
      return { ...state, [action.payload.name]: action.payload.value };
    },
    searchUser: (state, action) => {
      state.users = state.users.filter((user) =>
        user.first_name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    },
    ascendUser: (state) => {
      state.users = state.users.sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
    },
    descendUser: (state) => {
      state.users = state.users.sort((a, b) =>
        b.first_name.localeCompare(a.first_name)
      );
    },
  },
});

export const {
  addUser,
  deleteUser,
  ascendUser,
  descendUser,
  searchUser,
  handleSrchChange,
} = userSlice.actions;

export default userSlice.reducer;
