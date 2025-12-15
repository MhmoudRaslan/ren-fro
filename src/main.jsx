import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS (optional - for modals, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Custom CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)