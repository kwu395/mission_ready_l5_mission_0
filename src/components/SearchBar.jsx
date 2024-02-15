import React from 'react'
import style from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src="./background.jpg"/>
      </div>
      <div className={style.search}>
        <h1>MOBILE MART</h1>
        <div className={style.searchbox}>
          <input className={style.input} type="text" placeholder="Search by Keywords..."/>
          <button className={style.button}>Search</button>
        </div>
      </div>
    </div>
  )
}

