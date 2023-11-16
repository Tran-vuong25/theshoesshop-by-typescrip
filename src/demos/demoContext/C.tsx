import React from "react";
import { useContext } from "react";
import { CountContext, useCountContext } from "./DemoContext";

export function C() {
  // const store = useContext(CountContext);
  // console.log(store);

  // const [count] = useContext(CountContext);
  const [count] = useCountContext();
  return <div>C: {count}</div>;
}
