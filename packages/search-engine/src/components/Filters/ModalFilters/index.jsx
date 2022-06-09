import React from 'react'
import css from './Filter.module.scss'
import ArrowBottom from '../../../assets/icons/ArrowBottom'

export default function ModalFilters(props) {
  const { title, children, visible, setVisible, reset, submitFn } = props

  return (
    <div className={css.selectFilter}>
      <button onClick={setVisible} className={css.buttonFilter}>
        <span>{title}</span>
        <ArrowBottom />
      </button>
      {visible &&
        <div className={css.modalFilter}>
          <div className={css.modalContent}>
            {children}
          </div>
          <div className={css.modalFooter}>
            <button className={css.delete} onClick={() => reset()}>Clear</button>
            <button className={css.done} onClick={() => submitFn()}>Apply</button>
          </div>
        </div>
      }
    </div>
  )
}
