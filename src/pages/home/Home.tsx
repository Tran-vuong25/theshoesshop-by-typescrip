import React, { useEffect, useState } from "react";
import { Slider } from "./slider/Slider";
import * as GS from "src/components/style/styled";
import { ListCard } from "src/components/list-card/ListCard";
// import RefComponent from "./ref-component/RefComponent";
import { axiosWithoutAuth, getAllProduct } from "src/services";
import { IIFE } from "src/utils/utils";
import { convertProductAPI } from "./convert";
import { TCard } from "src/components/list-card/card/Card";

export default function Home() {
  /**
   * - Call API get list product khi người dùng vào trang home
   */
  const [listProduct, setListProduct] = useState<TCard[]>([]);

  useEffect(() => {
    // *Cách 3: Có những dự án chỉ yêu cầu sử dụng async - await
    // IIFE: (()=> {})()
    IIFE(async () => {
      const response = await getAllProduct();
      setListProduct(convertProductAPI(response));
    });

    //* Cách 2: nhận từ product.service.ts .then(để nhận khi API trả về), .catch(để thông báo, nhận về lỗi)
    // getAllProduct()
    //   .then((response) => {
    //     if (response) {
    //       setListProduct(response);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // !___________________________________
    // const products = getAllProduct()
    // if (products) {
    //   setListProduct(products)
    // }
    // *Cách 1: Nhưng khi nhiều nơi cần gọi API này ra phải gọi nhiều nơi => bất cập
    // axiosWithoutAuth('/api/Product').then((resp) => {
    //   // console.log({ resp });
    //   // console.log(resp.data.content)
    //   if (resp?.data?.content) {
    //     setListProduct(resp.data.content);
    //   }
    // });
  }, []);

  // console.log({ listProduct });
  return (
    <>
      <Slider />
      {/* <RefComponent/> */}

      <GS.Title>Product Feature</GS.Title>
      <div style={{ margin: "4rem" }}>
        <ListCard products={listProduct} />
      </div>
    </>
  );
}
