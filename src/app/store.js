import { configureStore } from "@reduxjs/toolkit";
import { addressReducer } from "../features/inputs/addressSlice";
import inputSlice from "../features/inputs/inputSlice";
import { productReducer } from "../features/products/productsSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userSlice,
    inputs: inputSlice,
    address: addressReducer,
  },
});

export default store;
