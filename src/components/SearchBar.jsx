import React from 'react'
import style from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div class={style.search}>
        <input class={style.input} type="text"/>
        <button class={style.button}>
            Search
        </button>
    </div>
  )
}
