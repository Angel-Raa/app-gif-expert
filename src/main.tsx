import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gif from './Gif'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Gif />
  </StrictMode>,
)
