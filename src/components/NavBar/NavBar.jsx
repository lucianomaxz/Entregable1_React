import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav>
        <h1>MODA-MAN</h1>
        <div>
            <a href="">REMERAS</a>
            <a href="">MUSCULOSAS</a>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
