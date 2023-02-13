import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import TodoState from "./context/TodoState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>
);
reportWebVitals();
