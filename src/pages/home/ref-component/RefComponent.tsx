import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export default function RefComponent() {
  const ref = useRef<{ increase: () => void; descrease: () => void }>();

  const increase = () => {
    console.log(ref);
    ref.current?.increase();
  };
  const descrease = () => {
    ref.current?.descrease();
  };

  return (
    <>
      <button onClick={increase}>+</button>
      <Counter ref={ref} />
      <button onClick={descrease}>-</button>
    </>
  );
}

//! Không thể lấy ref thông qua props được
//* forwardRef: Dùng khi component muốn nhận ref từ bên ngoài
// forwardRef thường sẽ kết hợp với useImperativeHandle
const Counter = forwardRef(function Counter(props: any, ref: any) {
  // console.log({ props, ref });

  const [count, setCount] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      // ref.current = {abc:10}
      return {
        abc: 10,
        increase,
        descrease,
      };
    },
    [],
  );

  const increase = () => {
    setCount((c) => {
      return c + 1;
    });
  };
  const descrease = () => {
    setCount((c) => {
      return c - 1;
    });
  };

  return (
    <>
      {/* <button onClick={increase}>+</button> */}
      <h1>{count}</h1>
      {/* <button onClick={descrease}>-</button> */}
    </>
  );
});
