import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // ????
import reportWebVitals from "./reportWebVitals";
const rootDOC = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDOC);

root.render(
  <React.StrictMode>
    <h1>안녕하세요</h1>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
