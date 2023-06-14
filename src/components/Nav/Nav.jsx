import React, { useState, useEffect } from "react"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'
import "./nav.css"
import Big from 'big.js'
import Logo from '../../assets/world-s.png'

const Nav = ({cartCount, cartItems, updateCartItem, setCartCount }) => {
  const [Mobile, setMobile] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [totalPrice, setTotalPrice] = useState(Big(0))


  useEffect(() => {
    let sum = Big(0);
    cartItems.forEach((item) => {
      const price = Big(item.price)
      sum = sum.plus(price)
    });
    setTotalPrice(sum)
  }, [cartItems])

  const handleAddToCart = () => {
    setShowModal(true)
    
  }

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1)
    updateCartItem(updatedCartItems)
    setCartCount(prevCount => prevCount - 1)
  };

  
  

  return (
    <>
     <header>
      <div className='container flexSB'>
        <nav className='flexSB'>
          <div className='logo'>
            <img src={Logo} alt='Megaflix' />
          </div>
          <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
            <li><a href="#nosotros">Login</a></li>
            <li><a href="#planes">Tienda</a></li>
            <li><a href="#footer">Compras</a></li>
            <a href="#"></a>
            <AiOutlineShoppingCart className='car-icon' onClick={handleAddToCart}/>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </ul>
          <button className='toggle' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </div>
      
      
    </header>
     {/* Modal */}
     {showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Productos agregados</h2>
          <table className="cart-items">
            <thead>
              <tr>
                <th>Productos</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
            {cartItems.map((item, index) => ( 
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                      <RiDeleteBin6Line onClick={() => handleRemoveFromCart(index)} />
                    </td>
              </tr>
            ))}
            <tr>
            <td>Total:</td>
            <td>{totalPrice.toFixed(2)} USD</td>
          </tr>
            </tbody>
          </table>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </div>
      </div>
    )}
    </>
  )
}

export default Nav