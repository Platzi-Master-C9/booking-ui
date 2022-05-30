import React from 'react'
import css from './ErrorMessage.module.scss'

export const ErrorMessage = ({ message }) => {
  return (
    <p className={css.errorMessage}>{message}</p>
  )
}
