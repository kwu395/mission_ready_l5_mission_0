import React from 'react'
import style from './Product.module.css'

export default function Products(props) {
  return (
    <>
    <h1 className = {style.header}>IPHONES</h1>
    <div className = {style.products}>
      {props.products.map((product, index) => 
        <div key={index} className = {style.box}>
            <img key={index} src={`./${product.name}.png`}/>
            <h3>{product.name}</h3>
        </div>
      )}
    </div>
    </>
  )
}
