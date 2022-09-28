import React from 'react'
import { Navbar } from "react-bootstrap"
import "./MyNavbar.css"
import { Link } from "react-router-dom"
import { FaHome, FaCartPlus, FaShoppingBag } from "react-icons/fa"
import { useSelector } from 'react-redux'



function MyNavbar() {
  const { noOfItems } = useSelector((state) => state.cart)

  return (
    <div>
      <Navbar className="Task-Navbar">
        <div className='Task-main'>
          <Link to="/" className='nlink'><FaHome className='nav-icon' /> Home</Link>
          <Link to="/allorders" className='nlink'><FaShoppingBag className='nav-icon' /> All Order</Link>
          <Link to="/cart" className='nlink'> <FaCartPlus className='nav-icon' /> Cart {noOfItems}</Link>
        </div>
      </Navbar>
    </div>
  )
}

export default MyNavbar