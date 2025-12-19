import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Finn HTML-elementet med id "root" og tell React at vi vil rendere der
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
