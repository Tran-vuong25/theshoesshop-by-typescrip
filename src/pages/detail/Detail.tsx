import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"; // nhận lấy pram truyền vào
import { getProductByID } from "src/services";
import { IIFE } from "src/utils/utils";
import { IDetailAPI } from "./type";
import { ListCard } from "src/components/list-card/ListCard";
import { convertProductAPI } from "../home/convert";

//* custom hook: Để nhận diện custom hook
// ? Ghi chú: Hooks chỉ được sử dụng trong custom hook + component
// !Chú Ý: Đặc biệt là sử dụng được các hooks bên trong nên được gọi là custom hook
function useScrollToTop() {
  // *Lắng nghe URL thay đổi:
  const location = useLocation();
  // console.log({ location });

  // Lắng nghe một cái gì đó thay đổi, thì sẽ làm một cái gì đó
  useEffect(() => {
    //* Lắng nghe URL thay đổi (useLocation) thì sẽ scrool top
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
}

export default function Detail() {
  useScrollToTop();

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
    <div>
      <img
        style={{
          width: "50rem",
          height: "50rem",
        }}
        src={detail?.image}
        alt=""
      />
      {/* Card */}
      {/* Relate Product */}
      {detail?.relatedProducts?.length && (
        <ListCard products={convertProductAPI(detail.relatedProducts)} />
      )}
    </div>
  );
}
