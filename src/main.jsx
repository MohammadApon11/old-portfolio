import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import { InfoProvider } from "./provider/infoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={`overflow-x-hidden bg-black`}>
      <InfoProvider>
        <Home />
      </InfoProvider>
    </div>
  </React.StrictMode>
);
