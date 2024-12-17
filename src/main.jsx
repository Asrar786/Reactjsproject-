import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Signin from './component/Signin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signin/>
  </StrictMode>,
)
