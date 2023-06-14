import React, { useState } from "react"
import Nav from './components/Nav/Nav'
import Home from './components/home/Home'
import Store from './components/store/Store'

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItem, setCartItems] = useState([]); // Estado para almacenar los productos del carrito

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setCartItems((prevItems) => [...prevItems, product]) // Agregar el producto al array de cartItems
    setCartCount((prevCount) => prevCount + 1)
  }

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItem]
    updatedCartItems.splice(index, 1)
    setCartItems(updatedCartItems)
    setCartCount((prevCount) => prevCount - 1)
  }

  const updateCartItem = (updatedItems) => {
    setCartItems(updatedItems);
  }

  return (
    <>
      <Nav cartCount={cartCount} cartItems={cartItem} setCartCount={setCartCount} updateCartItem={updateCartItem} handleRemoveFromCart={handleRemoveFromCart} />
      <Home />
      <Store setCartCount={setCartCount} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
    </>
  )
}

export default App
