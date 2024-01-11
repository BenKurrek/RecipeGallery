import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import "./styles/main.css"; // Global styles
import App from "./App"; // Import the main App component

const rootElement = document.getElementById("root"); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Service worker setup (if used)
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }
