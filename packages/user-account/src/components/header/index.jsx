import React from 'react';
import './header.css'

export default function Header() {
  return (
    <>
    <div className="header-nav">
        <img className="logo" src="https://i.postimg.cc/xTKTqPZH/f035ff55-0cf0-4dad-ade2-df1080f61372.png" alt="logo"></img>
        <div className="header-nav__user-info">
            <button type="button" name="button" className="secondary-button">Hazte anfitrion</button>
            <img className="profile-photo" src="https://i.postimg.cc/rpsrSW1j/ecf94ad7-b8d8-487a-a2ac-2168b116902e.png" alt="Woman photo"></img>
        </div>
    </div>
    <div className='line-item'>
    <hr />
    </div>
    </>
  )
}