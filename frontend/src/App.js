import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Main from "./components/Main/Main.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
