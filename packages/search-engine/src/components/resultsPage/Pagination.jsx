import React from 'react';
<<<<<<< HEAD
import './styles/Pagination.css'
=======
>>>>>>> Layout the search results page #41

export default function Pagination({currentPage, prevHandler, nextHandler, TotalPages}) {
  return <div className='paging__container'>
    <button className='icon icon--left' onClick={prevHandler}></button>
<<<<<<< HEAD
    <div>
      <span className='paging paging-start'> {currentPage + 1} </span>
      <span className='paging'> de </span>
      <span className='paging'> {TotalPages} </span>
    </div>
=======
    <div>{currentPage + 1}</div>
    <div>{currentPage + 2}</div>
    <div>{currentPage + 3}</div>
    <div>...</div>
    <div>{TotalPages}</div>
>>>>>>> Layout the search results page #41
    <button className='icon icon--right' onClick={nextHandler}></button>
  </div>
}
