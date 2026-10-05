import { useState } from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar'
import Layout from './components/layout'
import Home from './pages/HomePage'
import About from './pages/about'
import Products from './pages/products'
import Contact from './pages/contact'
import CartPage from './pages/cart'
import ProductDetails from './pages/productDetails'
import CheckoutPage from './pages/checkoutPage'
import OrderPlaced from './pages/order-placed'
import ScrollToTop from './components/scrollToTop'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route element = {<Layout className=".navbar-container"/>}>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/products" element = {<Products/>}></Route>
          <Route path="/productDetails/:id" element = {<ProductDetails/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/cart" element = {<CartPage/>}></Route>
          <Route path="/checkout" element = {<CheckoutPage/>}></Route>
          <Route path="/order-placed" element = {<OrderPlaced/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
