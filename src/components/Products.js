import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../features/products/productsSlice";

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if ("products/fetchProducts/fulfilled") {
      dispatch(fetchProducts());
    }
  }, []);
  console.log(products);

  return <div>Products</div>;
};

export default Products;
