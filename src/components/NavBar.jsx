import React from 'react'
import style from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className = {style.navbar}>
      <div>
      <img src="./Logo.png"/>
        <ul className = {style.rightList}>
          <li>Brands</li>
          <li>Hot Deals</li>
          <li>Help</li>
          <button>Login</button>
          <img src="./Hamburger.png"/>
        </ul>
      </div>
    </div>
  )
}
