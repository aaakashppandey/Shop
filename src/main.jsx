import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import Routes from "./routes.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
