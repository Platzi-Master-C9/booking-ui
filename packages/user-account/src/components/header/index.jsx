import React from 'react';
import './header.css'

export default function Header() {
  return (
    <div className="header">
        <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2018/11/House-logo-template-by-meisuseno-1-580x446.jpg" alt=""></img>
        <div className="user-info">
            <button type="button" name="button" className="secondary-button">hazte anfitrion</button>
            <img className="profile-photo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""></img>
        </div>
    </div>
  )
}