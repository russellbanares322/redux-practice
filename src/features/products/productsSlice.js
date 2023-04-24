import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCT_URL = "https://dummyjson.com/products";

const initialState = {
  products: [],
  status: "",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  ("products/get-all-products",
  async () => {
    try {
      const response = await axios.get(PRODUCT_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  })
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.products = [];
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload.products;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
      state.error = "Fetch failed";
      state.products = [];
    });
  },
});
export const selectAllProducts = (state) => state.products.products;
export const productReducer = productsSlice.reducer;
