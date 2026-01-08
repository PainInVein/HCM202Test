import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { LenisScroll } from "./LenisScroll"; // Adjust path if needed

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LenisScroll>
      <App />
    </LenisScroll>
  </React.StrictMode>
);
