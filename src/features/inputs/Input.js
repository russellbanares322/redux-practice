import React from "react";
import { handleChange } from "./inputSlice";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs);
  const { name, address, number } = useSelector((state) => state.inputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  console.log(name, address, number);

  return (
    <div>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <h1>{number}</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          onChange={(e) => dispatch(handleChange({ name: e.target.value }))}
          name="name"
          type="text"
        />
        <input
          placeholder="number"
          onChange={(e) => dispatch(handleChange({ number: e.target.value }))}
          name="number"
          type="text"
        />
        <input
          placeholder="address"
          onChange={(e) => dispatch(handleChange({ address: e.target.value }))}
          name="address"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
