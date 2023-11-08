import React, { PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";

export function HomeTemplate(props: PropsWithChildren) {
  console.log(props);
  return (
    <div>
      <header
        style={{
          height: 50,
          backgroundColor: "green",
        }}
      >
        Header
      </header>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Outlet />
      </Suspense>
      {/* {props.children} */}
      <footer
        style={{
          height: 50,
          backgroundColor: "black",
          color: "white",
        }}
      >
        Footer
      </footer>
    </div>
  );
}
