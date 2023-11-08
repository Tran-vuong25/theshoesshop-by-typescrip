import React from "react";
import "./globalStyle.css";

type TProps = {
  children: React.ReactNode;
};

export function GlobalStyle(props: TProps) {
  return <>{props.children}</>;
}
