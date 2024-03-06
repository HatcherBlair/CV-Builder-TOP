import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { InfoForm } from "./components/infoForm.jsx";
import { Resume } from "./components/resume.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <InfoForm />
    <Resume />
  </React.StrictMode>
);
