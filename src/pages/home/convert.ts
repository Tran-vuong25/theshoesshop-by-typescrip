import { TCard } from "src/components/list-card/card/Card";
import { IRelatedProduct } from "../detail/type";

export type TProductAPI = {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
};

export const convertProductAPI = (data: IRelatedProduct[]): TCard[] => {
  return data.map((item) => ({
    desc: item.shortDescription,
    src: item.image,
    name: item.name,
    price: item.price,
    alt: item.name,
    id: item.id,
  }));
};
