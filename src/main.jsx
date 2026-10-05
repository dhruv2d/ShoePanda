import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { CartContext, CartProvider } from './context/cartContext.jsx'
import './index.css'
import './mobile_style.css'
import './tablet_style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </StrictMode>
)
