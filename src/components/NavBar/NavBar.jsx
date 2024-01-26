import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Logo from './assets/imagenes/LOGO.png'

const NavBar = () => {
  return (
    <nav>
        <h1>MODA-MAN</h1>
        <a href=""><img src={Logo} alt="Logo" /></a>
        <div>
            <a href="">REMERAS</a>
            <a href="">MUSCULOSAS</a>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
