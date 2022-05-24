import React from 'react';
import './hostDetails.css';

export const HostDetails = (props) => {

  const hostInformation =
  {
    host: 'Laura',
    id: true,
    photoHost : '',
    ratings: '221',
    description: 'soy muy independiente',
    languages: 'Español, Inglés y Francés',
    answers: 'En menos de una hora'
  }

  return(
    <div className="host-container">
      <div className='host-profile'>
        <img className='host-profile__image'
        
        />
        <h3>Anfitrión: {props.host}</h3>
        <p className='host-profile__date'>Se registró en febrero de 2018</p>
        <div className="host-profile__ranking">
          <p className='ranking'>evaluaciones</p>
          <p className='id-validation'>Identidad verificada</p>
        </div>
      </div>
      <div className='host__details-container'> 
           <div className='host-description'>
              <p className='host-description-bio'>
               
                Hola, mi nombre es y soy del hermoso y colorido norte de Colombia.
                Vine a Medellín hace 10 años para sentirme mitad costeña y mitad paisa, mi cultura es una mezcla compleja ya que también he vivido en el extranjero. Soy ingeniera civil que actualmente estudia francés. Disfruto...
              </p>
              <a href="#">Mostrar más</a>
            </div>

             <div className='host-info'>
             <ul >
                <li>Idiomas: Español, Inglés y Francés</li>
                <li>Índice de Respuesta: 98%</li>
                <li>Tiempo de Respuesta: en menos de una hora</li>
              </ul>
              <button>
                Contacta al anfitrión
              </button>
             </div>
       </div> 
    </div>
  )

}

export default HostDetails;