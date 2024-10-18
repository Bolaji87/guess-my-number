import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GuessProvider } from "./hooks/GuessContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuessProvider>
      <App />
    </GuessProvider>
  </StrictMode>
);
