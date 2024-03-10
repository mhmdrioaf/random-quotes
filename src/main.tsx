import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./lib/hooks/themeContext.tsx";
import { QuoteProvider } from "./lib/hooks/quoteContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QuoteProvider>
        <App />
      </QuoteProvider>
    </ThemeProvider>
  </React.StrictMode>
);
