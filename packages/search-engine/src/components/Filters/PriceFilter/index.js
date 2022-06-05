import React, { useState } from 'react'
import css from './PriceFilter.module.scss'

export default function PriceFilter (props) {
  const { minPrice, maxPrice, handleMinPrice, handleMaxPrice } = props

  return (
    <div className={css.priceFilter}>
      <div className={css.priceContainer}>
        <p>Precio mínimo</p>
        <div className={css.price}>
          <span>$</span>
          <input type="number" value={minPrice} onChange={handleMinPrice}/>
        </div>
      </div>
      <div className={css.separator} />
      <div className={css.priceContainer}>
        <p>Precio máximo</p>
        <div className={css.price}>
          <span>$</span>
          <input type="number" value={maxPrice} onChange={handleMaxPrice}/>
        </div>
      </div>
    </div>
  )
}
