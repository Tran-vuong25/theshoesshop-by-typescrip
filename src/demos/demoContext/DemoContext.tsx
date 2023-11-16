import React, { useContext } from "react";
import { PropsWithChildren, createContext, useState } from "react";
import { A } from "./A";

// giá trị default cho những component chưa bọc bởi CountProvider
type TCountContent = readonly [
  number,
  React.Dispatch<React.SetStateAction<number>>,
];
// *Tạo một Context
export const CountContext = createContext<TCountContent>(
  null as unknown as TCountContent,
);

export const useCountContext = () => {
  const store = useContext(CountContext);
  // console.log({ store });
  if (!store) {
    throw Error("Phải bọc trong CountProvider");
  }
  return store;
};

function CountProvider(props: PropsWithChildren) {
  //   console.log({CountContext});
  // tạo state
  const [count, setCount] = useState(0);

  // tạo store
  const value = [count, setCount] as const;

  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  );
}

export function DemoContext() {
  // Nếu đứng ở ngoài gọi store thì kết quả sẽ trả về null
  // const store = useCountContext();
  // console.log({store})

  return (
    <CountProvider>
      <A />
    </CountProvider>
  );
}
