import React from 'react';
import ReactDOM from 'react-dom/client';
import './ProfileCard/ProfileCard.css'; // Import BlogCard-specific styles
import App from './ProfileCard/App'; // Import the BlogCard App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Start measuring performance
reportWebVitals();
