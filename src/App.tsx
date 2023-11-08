// import "./App.css";

//* _____________ import router cho dự án _________________
// Kết nối với react
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
// --------------------------------------------------------

import { GlobalStyle } from "./components/global-style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle>
        <RouterProvider router={router} />
      </GlobalStyle>
    </>
  );
}

export default App;
