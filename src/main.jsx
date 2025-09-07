import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log("✅ main.jsx loaded");      // should appear in DevTools console
alert("✅ JS loaded");                   // should pop once on page load

const root = document.getElementById("root");
if (!root) {
  alert("❌ No #root found in index.html");
} else {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
