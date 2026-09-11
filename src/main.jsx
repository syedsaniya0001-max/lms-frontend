import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Main from './LMS_PROJECT_REACT/Main'
import Mainc from './COLLEGE/Mainc'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Main/> */}
    <Mainc/>
    
  </StrictMode>,
)
