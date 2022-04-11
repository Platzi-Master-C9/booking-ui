import React from 'react';
import './SideCard.css';

export const SideCard = () => {
    return (
        <div className='card_container'>
            <div className='card_info'>
                <img className='card_image' src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80' />
                <h2 className='card_title'>New Loft near Parqu...</h2>
                <p className='card_cta title'>¿Quieres reservarlo?</p>
                <p className='card_cta text'>Laura permite que los huéspedes puedan hacer una reservación inmediata.</p>
                <input className='card_button' type='button' name='btn' value='Reservar' />
            </div>
        </div>
    );
};

export default SideCard;