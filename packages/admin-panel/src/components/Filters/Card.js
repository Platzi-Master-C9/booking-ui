import React from 'react';
import "./filters.css"

export const Card = ({ titleOne, titleTwo, descriptionOne, descriptionTwo, checkedOne, checkedTwo, handleChexboxOne, handleChexboxTwo, handleChexboxOneDelete }) => {
    return (
        <div className='cardContainer'>
            <div className='lineDown'>
                <div className='details'>
                    <input onChange={handleChexboxOne} checked={checkedOne} className='input' type="checkbox" />
                    <div className='dees'>
                        <p className='title'>{titleOne}</p>
                        <span className='description'>{descriptionOne}</span>
                    </div>
                </div>
                <div className='details'>
                    <input onChange={handleChexboxTwo} checked={checkedTwo} className='input' type="checkbox" />
                    <div className='dees'>
                        <p className='descriptionTitle'>{titleTwo}</p>
                        <span className='description'>{descriptionTwo}</span>
                    </div>
                </div>
            </div>

            <div className='buttonContainer'>
                <span className='delete' onClick={handleChexboxOneDelete}>Borrar</span>
                <button className='buttonSave'>Guardar</button>
            </div>
        </div>
    )
}
