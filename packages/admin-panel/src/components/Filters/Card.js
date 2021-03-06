import React, { useContext } from 'react';
import "./filters.css"
import { ContextFilters } from './FiltersContext/ContextFilters';

export const Card = ({ titleOne, titleTwo, descriptionOne, descriptionTwo, checkedOne, checkedTwo, handleChexboxOne, handleChexboxTwo, handleChexboxOneDelete}) => {
    const {  clicked, setClicked, handleClose, filterUsers } = useContext(ContextFilters)

    return (
        <>
        <div className='cardContainer'>
            <div className='lineDown'>
                <div className='details'>
                    <input onChange={handleChexboxOne} checked={checkedOne} className='input' type="checkbox" />
                    <div className='dees'>
                        <p className='descriptionTitle'>{titleOne}</p>
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
                <span className='delete' onClick={handleChexboxOneDelete}>Delete</span>
                <button className='buttonSave' disabled={checkedOne === false && checkedTwo === false} onClick={filterUsers}>Save</button>
            </div>
        </div>
        <div onClick={handleClose} className="filterDiv" id="filter"></div>
        </>
    )
}
