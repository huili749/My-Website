import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // Add BrowserRouter here
import { ScrollProvider } from './context/ScrollContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import smoothscroll from 'smoothscroll-polyfill';

// Initialize smooth scroll polyfill
smoothscroll.polyfill();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollProvider>
        <App />
      </ScrollProvider> 
    </HashRouter>
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();
