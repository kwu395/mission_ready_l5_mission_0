import React from 'react'
import style from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={style.container}>
        <img src="./background.jpg"/>
        <h1>MOBILE MART</h1>
        <input className={style.input} type="text"/>
        <button className={style.button}>Search</button>
    </div>
  )
}

