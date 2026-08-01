import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. Only import HashRouter
import { HashRouter } from 'react-router-dom' 
import App from './App'
import { ThemeProvider } from './context/ThemeContext' // <-- Make sure this is imported
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Use HashRouter instead of BrowserRouter */}
    <HashRouter>
      {/* The ThemeProvider must wrap App! */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)