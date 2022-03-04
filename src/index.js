import React from "react";
import ReactDOM from "react-dom";
import "./Assets/Global_Styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import App from "./App.js";
import reportWebVitals from "./Test/reportWebVitals";
import Navigation from "./Components/Smart/Navigation/Navigation";

const app = <Routes />;

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
