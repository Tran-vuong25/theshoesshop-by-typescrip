import { lazy } from "react"; //* dùng để tách ra load từng trang tránh quá nặng ảnh hưởng đến performance
// ------------------------------------------
import { createBrowserRouter } from "react-router-dom";
// ------------------------------------------
import { Suspense } from "react"; //* dùng để đợi lazy load xong component rồi mới hiện ra component
// ------------------------------------------

// import { Home } from "../pages/home/Home";
// import { Search } from "../pages/search/Search";
// import { Carts } from "../pages/cart/Carts";
// import { Detail } from "../pages/detail/Detail";
// import { Login } from "../pages/login/Login";
// import { Profile } from "../pages/profile/Profile";
// import { Register } from "../pages/register/Register";
// *_____________Template rất nhẹ chúng ta không cần lazy load _____________
import { HomeTemplate } from "../templates/home/HomeTemplate";
import { AuthTemplate } from "../templates/auth/AuthTemplate";

// *____________________lazy load_____________________
const Home = lazy(() => import("../pages/home/Home"));
const Search = lazy(() => import("../pages/search/Search"));
const Carts = lazy(() => import("../pages/cart/Carts"));
const Detail = lazy(() => import("../pages/detail/Detail"));
const Login = lazy(() => import("../pages/login/Login"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const Register = lazy(() => import("../pages/register/Register"));
//! const { HomeTemplate } = lazy(() => import("../templates/home/HomeTemplate"));
//! const { AuthTemplate } = lazy(() => import("../templates/auth/AuthTemplate"));

// *set up Router
// part không được có "/" phía trước đường dẫn

/**
 * url: "/home/seach/abc"
 * <HomeTemplate>
 *  <Seach>
 *    <h1> abc </h1>
 *  </Seach>
 * </HomeTemplate>
 */
export const router = createBrowserRouter([
  {
    // path: "home",
    element: <HomeTemplate />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Search",
        element: (
          //* nếu file component chưa tải xong thì nó sẽ render component trong fallback
          // <Suspense fallback="Loading....">
            <Search />
          // </Suspense>
        ), //? Chắc chắn component đã chạy xong chưa
      },
      {
        path: "Carts",
        element: <Carts />,
      },
      {
        path: "Detail",
        element: <Detail />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthTemplate />,
    children: [
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*", // Nếu người dùng gõ một path không trùng khớp với mọi setup trong router của mình thì nó sẽ render ra component này
    element: <h1>Page not found</h1>,
  },
]);
