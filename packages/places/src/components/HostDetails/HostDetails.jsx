import React from 'react';
import './hostDetails.scss'

function HostDetails(props)  {

  return(
    <div className="host-details-container">
    
        <img className="host-details__img"
        src={props.photoHost}
        />
        <h3>Anfitrión: {props.host}</h3>
        <p className='host-details__date'>Se registró en {props.registerDate}</p>
      
      <div className="host-details__ranking">
        <img className="data__icon-start" src="/places/startRanking.png" alt="Start Ranking"/>
          <p className='ratings'> {props.ratings} evaluaciones</p>
          
          <img className="verified-user__icon" src='/places/verifiedUser.png' alt="Verified Symbol" />
          <p className='id-validation'>{props.id} Identidad verificada</p>
      </div>
      <div className='host-details__section'> 
            <div className='details-bio'>
              <p className='host-bio'>
              {props.hostBio}
              </p>
              <a href="#">Mostrar más</a>
            </div>
            <div className='host-info'>
              <ul className='host-info__list' >
                  <li>Idiomas: {props.languages}</li>
                  <li>Índice de Respuesta: {props.responseIndex} %</li>
                  <li>Tiempo de Respuesta: {props.responseTime}</li>
                </ul>
                <button>
                  Contacta al anfitrión
                </button>
              </div>
       </div> 
    </div>
  )

}

export  { HostDetails };