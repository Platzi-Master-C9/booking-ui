import React, { useState } from 'react'
import css from './SizeFilter.module.scss'

export default function SizeFilter (props) {
  const { fullPlace, privateRoom, sharedRoom, handleFullPlace, handlePrivateRoom, handleSharedRoom  } = props

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
        title='Entire place'
        description='A place all to you'
        check={fullPlace}
        handleCheck={handleFullPlace}
      />
      <LabelSize 
        title='Private room'
        description='Your own room in a home or a hotel, plus some shared common spaces'
        check={privateRoom}
        handleCheck={handlePrivateRoom}
      />
      <LabelSize 
        title='Shared room'
        description='A sleeping space and common areas that may be shared with others'
        check={sharedRoom}
        handleCheck={handleSharedRoom}
      />
    </div>
  )
}
