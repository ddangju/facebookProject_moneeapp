import React from "react";
import ReactDOM from "react-dom";
import "./styles/Reset.scss";
import "./styles/Variable.scss";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
