import React from "react";
import { Carousel } from "antd";
import * as S from "./style";
import { useRef } from "react";

export interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
}

export function Slider() {
  const refCarousel = useRef<CarouselRef>();

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <button
        onClick={() => {
          //   console.log({ refCarousel });
          //* Nếu vế trước "?" null hay undefined thì sẽ ko check về sau
          refCarousel.current?.next();
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          //   console.log({ refCarousel });
          if (refCarousel.current) {
            refCarousel.current.prev();
          }
        }}
      >
        Previos
      </button>
      <S.MyCarousel
        ref={refCarousel}
        afterChange={onChange}
        dots={{ className: "custom-dots" }}
      >
        <div>
          <S.CarouselItem>1</S.CarouselItem>
        </div>
        <div>
          <S.CarouselItem>2</S.CarouselItem>
        </div>
        <div>
          <S.CarouselItem>3</S.CarouselItem>
        </div>
        <div>
          <S.CarouselItem>4</S.CarouselItem>
        </div>
      </S.MyCarousel>
    </>
  );
}
