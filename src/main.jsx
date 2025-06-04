// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your main App component
import './index.css'; // Import global CSS

// Get the DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Check if the root element exists before trying to create a root
if (rootElement) {
  // Create a React root for the application
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component into the root
  root.render(
    <React.StrictMode>
      <App /> {/* Your main application component */}
    </React.StrictMode>
  );
} else {
  console.error("Error: Root element with ID 'root' not found in index.html. React cannot mount.");
}