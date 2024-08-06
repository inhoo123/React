import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const rootDOC = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDOC);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
