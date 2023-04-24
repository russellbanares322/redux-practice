import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  id: nanoid(),
  brgyId: 0,
  cityId: 0,
};
const addressSlice = createSlice({
  initialState,
  name: "address",
  reducers: {
    handleAddressChange: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { handleAddressChange } = addressSlice.actions;
export const addressReducer = addressSlice.reducer;
