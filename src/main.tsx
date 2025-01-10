import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'          //Imported for using Tailwind styling
import 'antd/dist/reset.css';   // Imported for Ant Design reset styles
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
