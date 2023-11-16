import React, { PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";
import { useScrollToTop } from "src/hooks/useScrollToTop";

export function HomeTemplate(props: PropsWithChildren) {
  useScrollToTop();

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
