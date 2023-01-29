import React from "react";
import ReactDOM from "react-dom/client";
import { ProviderRouter } from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderRouter />
  </React.StrictMode>
);
