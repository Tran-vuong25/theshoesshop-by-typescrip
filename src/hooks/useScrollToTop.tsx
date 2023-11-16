import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//* custom hook: Để nhận diện custom hook
// ? Ghi chú: Hooks chỉ được sử dụng trong custom hook + component
// !Chú Ý: Đặc biệt là sử dụng được các hooks bên trong nên được gọi là custom hook
export function useScrollToTop() {
  // *useLocation: Lắng nghe URL thay đổi:
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
