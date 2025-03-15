import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {

  var state  = useSelector((state)=>state.handleCart)

  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container">
    <Link className="navbar-brand" to="/"> <img src="assets/images/sachin_logo.png" alt="Logo" style={{ height: '60px' , width: '70px'}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/men">Categories</Link>
        </li>


      </ul>
      
<Link to='/login' type='button' className='btn '>Login</Link>
<Link to='/signup' type='button' className='btn'>Signup</Link>
<Link to='/cart' type='button' className='btn'>Cart({state.length})</Link>

    </div>
  </div>
</nav>
    
    </>
  )
}
