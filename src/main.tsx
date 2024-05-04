import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import DarkModeProvider from "./context/index.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Router>
  </React.StrictMode>
);