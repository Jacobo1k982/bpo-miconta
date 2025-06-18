import React from "react";
import ReactDOM from "react-dom/client"; // ✅ ESTA LÍNEA ES CLAVE
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // tu archivo de estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
