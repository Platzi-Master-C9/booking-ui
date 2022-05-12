import React from 'react';
import { Card } from './Card';
import "./filters.css";

export const CardContainer = ({ type, titleOne, titleTwo, descriptionOne, descriptionTwo, show, checkedOne, checkedTwo, handleSetShow, handleChexboxOne, handleChexboxTwo, handleChexboxOneDelete, }) => {

  return (
    <>
      
        <div className='type'>{type}
          <figure onClick={handleSetShow} className='figure'>
            {show === true ?
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            }
          </figure>
        </div>
        {
          show === true && <Card checkedOne={checkedOne} checkedTwo={checkedTwo} handleChexboxOne={handleChexboxOne} handleChexboxTwo={handleChexboxTwo} handleChexboxOneDelete={handleChexboxOneDelete} titleOne={titleOne} titleTwo={titleTwo} descriptionOne={descriptionOne} descriptionTwo={descriptionTwo} />
        }
      
    </>
  )
}
