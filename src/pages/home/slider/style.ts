import { Carousel } from "antd";
import { styled } from "styled-components";

export const MyCarousel = styled(Carousel)`
    .slick-dots.custom-dots li {
        &.slick-active{
            width: unset
        }

        button{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: #fff;
        }
}
`

export const CarouselItem = styled.h3`
  margin: 0;
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;
