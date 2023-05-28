import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import App from "./App";
import "./index.css";
// import store from "./app/store";

// let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
