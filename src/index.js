import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <div className="container-main">
        <App />
      </div>
    </Context>
  </React.StrictMode>
);
