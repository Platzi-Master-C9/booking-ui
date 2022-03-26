import React from 'react';
import { Card } from './Card'
import "./filters.css";

export const CardContainer = ({ type, titleOne, titleTwo, descriptionOne, descriptionTwo,  show, checkedOne, checkedTwo, handleSetShow, handleChexboxOne, handleChexboxTwo, handleChexboxOneDelete, }) => {

  return (
    <>
    <div>
    <div className='type'>{type} 
      <figure onClick={handleSetShow} className='figure'>
        <img className='img' src={""} alt="flecha" />
      </figure>
    </div>
      {
       show === true && <Card checkedOne={checkedOne} checkedTwo={checkedTwo} handleChexboxOne={handleChexboxOne} handleChexboxTwo={handleChexboxTwo} handleChexboxOneDelete={handleChexboxOneDelete} titleOne={titleOne} titleTwo={titleTwo} descriptionOne={descriptionOne} descriptionTwo={descriptionTwo} />
      }
      
      </div>
    </>
  )
}
