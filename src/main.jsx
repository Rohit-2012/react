import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContext from "./components/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContext>
);
