import React from 'react'
import ReactDOM from "react-dom"
import "../filter.css"

const ModalFilter = ({ children }) => {
  return ReactDOM.createPortal(
      <div>{children}</div>,
      document.getElementById("filter")
  )
}

export default ModalFilter