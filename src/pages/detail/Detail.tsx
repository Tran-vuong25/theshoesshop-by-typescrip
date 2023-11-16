import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //* nhận lấy pram truyền vào
import { getProductByID } from "src/services";
import { IIFE } from "src/utils/utils";
import { IDetailAPI } from "./type";
import { ListCard } from "src/components/list-card/ListCard";
import { convertProductAPI } from "../home/convert";
// *Lấy dữ liệu từ trên store của redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "src/redux/cartSlice";
import { useAppSelector } from "src/redux/hookRedux";

export default function Detail() {
  const { cart } = useAppSelector((rootReducer) => {
    // console.log({ rootReducer });
    return rootReducer.cartsReducer;
  });

  const dispatch = useDispatch();

  const params = useParams<{ idDetail: string }>();
  // console.log(params);

  const [detail, setDetail] = useState<IDetailAPI>();
  // console.log({detail})

  /**
   * Call API khi vào trang detail với id gì gì đó?
   */

  useEffect(() => {
    IIFE(async () => {
      if (params.idDetail) {
        const resp = await getProductByID(params.idDetail);
        setDetail(resp);
      }
    });
    //* params: Readonly<Partial<{  }>>
    // Readonly: chỉ đọc truyền vào, không thể chỉnh sữa
    // Partial: chuyển type thành dạng optional ?:
  }, [params.idDetail]);

  return (
    <>
      <div>
        <img
          style={{
            width: "50rem",
            height: "50rem",
          }}
          src={detail?.image}
          alt=""
        />
        <button
          onClick={() => {
            const action = addToCart(detail);
            // console.log({ action });

            dispatch(action);
            // dispatch({
            //   type: "cartSlice/addToCart",
            // });
          }}
        >
          Add Product
        </button>
      </div>
      {/* Card */}
      {/* Relate Product */}
      {detail?.relatedProducts?.length && (
        <ListCard products={convertProductAPI(detail.relatedProducts)} />
      )}
    </>
  );
}
