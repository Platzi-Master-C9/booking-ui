import React from 'react';

export default function Pagination({currentPage, prevHandler, nextHandler, TotalPages}) {
  return <div className='paging__container'>
    <button className='icon icon--left' onClick={prevHandler}></button>
    <div>{currentPage + 1}</div>
    <div>{currentPage + 2}</div>
    <div>{currentPage + 3}</div>
    <div>...</div>
    <div>{TotalPages}</div>
    <button className='icon icon--right' onClick={nextHandler}></button>
  </div>
}
