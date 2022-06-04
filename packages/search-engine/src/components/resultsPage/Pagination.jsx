import React from 'react';
import './styles/Pagination.css'

function Pagination({ currentPage, prevHandler, nextHandler, TotalPages }) {
  return <div className='paging__container'>
    <button className='icon icon--left' onClick={prevHandler}></button>
    <div>
      <span className='paging paging-start'> {currentPage + 1} </span>
      <span className='paging'> de </span>
      <span className='paging'> {TotalPages} </span>
    </div>
    <button className='icon icon--right' onClick={nextHandler}></button>
  </div>
}

export { Pagination };
