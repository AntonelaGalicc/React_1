import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensure the DOM is ready, before accessing the element
const rootElement = document.querySelector("#app");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("The #app element was not found in the DOM.");
}
