import React, { useState } from 'react'
import css from './SizeFilter.module.scss'

export default function SizeFilter (props) {
  const { fullPlace, privateRoom, handleFullPlace, handlePrivateRoom } = props

  const LabelSize = ({
    title,
    description,
    check,
    handleCheck
  }) => (
    <label className={css.containerLabel}>
      <input type="checkbox" checked={check} onChange={handleCheck} />
      <div className={css.containerText}>
        <span className={css.title}>{title}</span>
        <span className={css.description}>{description}</span>
      </div>
    </label>
  )


  return (
    <div className={css.sizeFilter}>
      <LabelSize 
        title='Lugar completo'
        description='Tienes un espacio entero para ti'
        check={fullPlace}
        handleCheck={handleFullPlace}
      />
      <LabelSize 
        title='Habitación privada'
        description='Tienes tu propia habitación y compartes algunos espacios comunes'
        check={privateRoom}
        handleCheck={handlePrivateRoom}
      />
    </div>
  )
}
