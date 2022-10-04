import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetValue = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <h1>Shopping Cart: {count}</h1>
      <br />
      <input
        value={incrementAmount}
        type="text"
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <div>
          <ul
            style={{
              display: "inline-flex",
              listStyle: "none",
            }}
          >
            <li
              onClick={() => {
                dispatch(increment());
                alert("Added to cart");
              }}
              style={{
                marginRight: "1rem",
                border: "1px solid black",
                height: "15rem",
                width: "15rem",
                cursor: "pointer",
                borderRadius: "3rem",
              }}
            >
              <h1>Shirt</h1>
            </li>
            <li
              onClick={() => {
                dispatch(increment());
                alert("Added to cart");
              }}
              style={{
                marginRight: "1rem",
                border: "1px solid black",
                height: "15rem",
                width: "15rem",
                cursor: "pointer",
                borderRadius: "3rem",
              }}
            >
              <h1>Jacket</h1>
            </li>
            <li
              onClick={() => {
                dispatch(increment());
                alert("Added to cart");
              }}
              style={{
                border: "1px solid black",
                height: "15rem",
                width: "15rem",
                cursor: "pointer",
                borderRadius: "3rem",
              }}
            >
              <h1>Bag</h1>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={resetValue}>Clear</button>
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        IncrementByAmount
      </button>
    </section>
  );
};

export default Counter;
