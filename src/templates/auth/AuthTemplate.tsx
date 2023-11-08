import React, { PropsWithChildren } from "react";

export function AuthTemplate(props: PropsWithChildren) {
  return (
    <div>
      <aside
        style={{
          height: 200,
          width: 200,
          backgroundColor: "blue",
        }}
      >
        aside
      </aside>
      {props.children}
      <footer
        style={{
          height: 50,
          backgroundColor: "black",
          color: "white",
        }}
      >
        footer
      </footer>
    </div>
  );
}
