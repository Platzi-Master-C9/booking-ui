import React from 'react';
import './header.css'

export default function Header() {
  return (
    <>
    <div className="header-nav">
        <img className="logo" src="https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-bienes-raices-agencia-inmobiliaria-mercado-inmobiliario-residencial-industrial-comercial-cartera-inversiones-propiedad-vivienda-metafora-abstracta-valor-propiedad_335657-1967.jpg?t=st=1650512551~exp=1650513151~hmac=f9f4700a62ff4e3395e67e1892fa407dba15769e2506c1974ebf41b5877933fb&w=740" alt="logo house"></img>
        <div className="header-nav__user-info">
            <button type="button" name="button" className="secondary-button">Hazte anfitrion</button>
            <img className="profile-photo" src="https://shorturl.ae/AGIiN" alt="Woman photo"></img>
        </div>
    </div>
    <div className='line-item'>
    <hr />
    </div>
    </>
  )
}