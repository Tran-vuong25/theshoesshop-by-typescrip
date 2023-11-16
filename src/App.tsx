// import "./App.css";

//* _____________ import router cho dự án _________________
// Kết nối với react
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
// --------------------------------------------------------

import { GlobalStyle } from "./components/global-style/GlobalStyle";
import { DemoContext } from "./demos/demoContext/DemoContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// *-----------------Redux---------------------------------

function App() {
  return (
    <>
      <GlobalStyle>
        {/* <DemoContext/> */}
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </GlobalStyle>
    </>
  );
}

export default App;
