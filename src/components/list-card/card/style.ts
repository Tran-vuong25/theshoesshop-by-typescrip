import { styled } from "styled-components";
import { Card } from "./Card";

export const Wrapper = styled.div`
  width: 35rem;
  box-shadow: -8px 0rem 2rem 0 #00000040;
  height: 43rem;

  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  overflow: hidden;

  .img {
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    margin: 2.5rem;
  }

  .action {
    margin-top: auto;
  }
`;

export const Image = styled.img`
  width: 21rem;
  height: 16.8rem;

  object-fit: cover;
  margin-top: 2rem;
`;

export const Name = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  text-align: left;
`;

export const Desc = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: #cbc9c9;
`;

type TVariant = "buy" | "dollar";

// ? Record: muốn định nghĩa 1 Object có key là string và giá trị của tửng key đó là number => {a: 10, b: 20, c: 30, d: 40}
// *type TObject = {a: number, b: number, c: number, d: number}
/**
 * Record<string, number>
 */

// *strategy pattent
const variant: Record<TVariant, string> = {
  buy: "#9DE167",
  dollar: "#DEDDDC",
};

// background: #9DE167;
// background: #DEDDDC;
export const Button = styled.button<{ variant: TVariant }>`
  background: ${(props) => {
    // *Cách 3
    return variant[props.variant];

    // *Cách 2
    switch (props.variant) {
      case "buy":
        return "#9DE167";
      case "dollar":
        return "#DEDDDC";

      default:
        return "";
    }

    // *Cách 1
    if (props.variant === "buy") {
      return "#9DE167";
    } else {
      return "#DEDDDC";
    }
  }}; //#DEDDDC
  border: none;
  height: 6.4rem;
  width: 50%;
`;
