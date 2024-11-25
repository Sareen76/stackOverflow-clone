import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToggleProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <ToggleProvider>
    <App />
  </ToggleProvider>
)
