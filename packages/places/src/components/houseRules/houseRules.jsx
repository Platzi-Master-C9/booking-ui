import React from 'react';
import css from './houseRules.module.scss';

export const houseRules = () => {
  return (
    <div className={css["should-know"]} >
      <h1>Lo que debes saber</h1>
      <div className="rules">
        <h2>Reglas de la casa</h2>
        <ul>
          <li>Check-in: 15:00 a 02:00</li>
          <li>Salida: 11:00 </li>
          <li>Acceso sin restricción de horario con caja de seguridad con llaves </li>
          <li>No se admiten mascotas</li>
          <li>Está prohibido hacer fiestas o eventos</li>
          <li>Apto para fumadores</li>
        </ul>
      </div>
      <div className="health-security">
        <h2>Salud y seguridad</h2>
        <ul>
          <li>Comprometido a seguir el proceso de limpieza avanzada de Airbnb</li>
          <li>Se aplican las pautas de distanciamiento social de Booking System y otras pautas relacionadas con el COVID-19 </li>
          <li>Piscina/jacuzzi sin puertas ni cerraduras</li>
          <li>Alarma de monóxido de carbono</li>
          <li>Alarma de humo</li>
        </ul>
      </div>
      <div className="cancellations">
        <h2>Política de cancelación</h2>
        <span>Agrega las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</span>
      </div>
    </div>
  );
};

export default houseRules;
