import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
