import React from 'react'
import style from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className = {style.navbar}>
      <div>
        <ul className = {style.rightList}>
          <li>Brands</li>
          <li>Hot Deals</li>
          <li>Help</li>
          <button>Login</button>
        </ul>
      </div>
    </div>
  )
}
