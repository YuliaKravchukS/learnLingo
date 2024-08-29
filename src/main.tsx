import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>
);
