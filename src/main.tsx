import { StrictMode } from "react";
// import creatRoot 
import { createRoot } from "react-dom/client";

// import global css and APP and move coponents to main
import App from "./App";
import './styles/global.css'
import "./styles/firebaseEmulatorWarning.css";

import "./services/i18n"; // I dont know what this is :/

// removing create element
createRoot(
  document.getElementById("root")!).render(
    <StrictMode>
      <div className="loading">
        <div className="loader"></div>
        <App />
      </div>
    </StrictMode>
);
