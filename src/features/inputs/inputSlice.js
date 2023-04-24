import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
  phAddresses: [],
};
const inputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { handleChange } = inputSlice.actions;

export default inputSlice.reducer;
