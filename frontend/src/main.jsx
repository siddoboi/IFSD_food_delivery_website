import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext.jsx'; // <-- 1. IMPORT IT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* <-- 2. WRAP YOUR APP */}
        <App />
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);