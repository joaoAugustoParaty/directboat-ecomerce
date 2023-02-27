import React from "react";
import ReactDOM from "react-dom/client";

//npm install remixicon --save
import "remixicon/fonts/remixicon.css";

//npm install react-bootstrap bootstrap
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

//npm i react-router-dom
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
