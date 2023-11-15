import React, { PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";

export function HomeTemplate(props: PropsWithChildren) {
  // console.log(props);
  return (
    <div>
      <Header />

      {/* --------Pages--------- */}
      <Suspense fallback={<h2>Loading....</h2>}>
        <Outlet />
      </Suspense>
      {/* {props.children} */}
      {/* --------Pages--------- */}

      <Footer />
    </div>
  );
}
