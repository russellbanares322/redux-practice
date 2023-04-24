import React, { useState } from "react";
import { handleChange } from "./inputSlice";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs);
  const address = useSelector((state) => state.address);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.number) {
      return alert("Invalid");
    }
    const newPhAddresses = [...inputs.phAddresses];
    newPhAddresses.push(address);
    dispatch(handleChange({ phAddresses: newPhAddresses }));
    setData(inputs);
    console.log(inputs);
  };
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <hr />
      <h1>{inputs?.name}</h1>
      <h1>{inputs?.number}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {JSON.stringify(inputs)}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          onChange={(e) => dispatch(handleChange({ name: e.target.value }))}
          name="name"
          type="text"
          value={inputs?.name}
        />
        <input
          placeholder="number"
          onChange={(e) => dispatch(handleChange({ number: e.target.value }))}
          name="number"
          type="text"
          value={inputs?.number}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
