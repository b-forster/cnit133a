import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
