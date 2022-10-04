import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// This is where you will store all the reducer that has been created in counterSlice component
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
