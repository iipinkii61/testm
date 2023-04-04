import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EmployeeContextProvider from "./context/EmployeeContext";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import * as te from "tw-elements";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeContextProvider>
      <App />
    </EmployeeContextProvider>
  </React.StrictMode>
);
