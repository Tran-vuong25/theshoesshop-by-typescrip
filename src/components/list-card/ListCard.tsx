import React from "react";
import { Card, TCard } from "./card/Card";

type TProps = {
  products: TCard[];
};

export function ListCard(props: TProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4rem",
        flexWrap: "wrap",
      }}
    >
      {props.products.map((item) => {
        return (
          <Card
            key={item.id}
            src={item.src}
            desc={item.desc}
            name={item.name}
            price={item.price}
            id = {item.id}
          />
        );
      })}
    </div>
  );
}
