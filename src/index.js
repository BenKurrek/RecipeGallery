import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Global styles
import App from "./App"; // Import the main App component

// Optionally wrap App in React.StrictMode for additional checks in development
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"), // Renders the App in the 'root' div element
);

// Service worker setup (if used)
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }
