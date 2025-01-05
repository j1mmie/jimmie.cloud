import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.tsx'

const root = document.getElementById('root')
if (!root) throw new Error('No root element')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
