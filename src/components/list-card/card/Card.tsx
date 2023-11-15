import React from "react";
import * as SCard from "./style";
import { useNavigate } from "react-router-dom"; //Đưa những click qua trang mong muốn

export type TCard = {
  id: any;
  src: string;
  alt?: string;

  name: string;
  desc: string;
  price: string | number;
};

// *Omit: trừ, loại bỏ thuộc tính 'id
// type TProps = Omit<TCard, "id">;
type TProps = TCard;

export function Card(props: TProps) {
  const { src, alt, name, desc, price } = props;

  const navigate = useNavigate()
  const handleNavigate = () => { 
    navigate(`/detail/${props.id}`)
   }
  return (
    <SCard.Wrapper>
      <div className="center">
        <SCard.Image onClick={handleNavigate} src={src} alt={alt} className="img" />
      </div>
      <div className="content">
        <SCard.Name>{name}</SCard.Name>
        <SCard.Desc>{desc}</SCard.Desc>
      </div>

      <div className="action">
        <SCard.Button onClick={handleNavigate} variant={"buy"}>Buy Now</SCard.Button>
        <SCard.Button variant={"dollar"}>${price}</SCard.Button>
      </div>
    </SCard.Wrapper>
  );
}
