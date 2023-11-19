// import "./App.css";

//* _____________ import router cho dự án _________________
// Kết nối với react
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
// --------------------------------------------------------

import { GlobalStyle } from "./components/global-style/GlobalStyle";
import { DemoContext } from "./demos/demoContext/DemoContext";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";

// *-----------------Redux---------------------------------
import { useEffect } from "react";
import { getLocalstorage } from "./utils/utils";
import { ACCESS_TOKEN } from "./constant";
import { getProfile } from "./services";
import { loginSuccess } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = getLocalstorage(ACCESS_TOKEN);
    if (accessToken) {
      getProfile().then((resp) => {
        dispatch(
          loginSuccess({
            email: resp.email,
          }),
        );
      });
    }
  }, []);

  return (
    <>
      <GlobalStyle>
        {/* <DemoContext/> */}
        <RouterProvider router={router} />
      </GlobalStyle>
    </>
  );
}

export default App;
