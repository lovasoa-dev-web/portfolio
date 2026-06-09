import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,
  once: true,
  offset: 120,
  easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);