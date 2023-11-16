import React, { useState, useContext } from "react";
import { B } from "./B";
import { CountContext, useCountContext } from "./DemoContext";

export function A() {
  // const [count, setCount] = useContext(CountContext); // Mong muốn sử dụng store của context nào? (CountContext)
  const [count, setCount] = useCountContext();

  const store = useCountContext()
  console.log({store})

  return (
    <div>
      <button
        onClick={() => {
          setCount((c: number) => {
            return c + 1;
          });
        }}
      >
        +
      </button>
      <h1>Count A: {count}</h1>
      <B />
    </div>
  );
}
