import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(
  "For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-18_June_2022_[v2]_MTY1NTUwNjgwMDAwMA==8d3070f2fab0efd56a6e2fc1596c2bb7"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
