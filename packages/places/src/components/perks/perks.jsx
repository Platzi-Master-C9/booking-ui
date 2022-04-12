import React from "react";
import css from './perks.module.scss';

export const Perks = () => {
  return (
    <div className={css.perks}>
      <h1>Lo que este lugar ofrece</h1>
      <ul>
        <li><img src="/places/cocina.png" />Cocina</li>
        <li><img src="/places/estacionamiento.png" />Estacionamiento gratuito</li>
        <li><img src="/places/tv.png" />Television con cable estándar</li>
        <li><img src="/places/lavadora.png" />Lavadora</li>
        <li><img src="/places/wifi.png" />Wifi</li>
        <li><img src="/places/piscina.png" />Piscina</li>
        <li><img src="/places/banera.png" />Agua caliente</li>
        <li><img src="/places/calefaccion.png" />Calefacción</li>
      </ul>
      <a href="#">Mostrar más</a>
    </div>
  );
};

export default Perks;
