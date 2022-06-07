import React from 'react';
import './Card.css';

const CardComponent = () => {
  return (
    <div className='wrap-card'>
      <div className='wrap-slider'>
        <div className='slider-arrow__right'></div>
        <img src='../../assets/images/card-img.png' alt='' />
      </div>
      <div className='card-content'>
        <img className='card-content__fav' src='../../assets/icons/icon-heart.png' alt='' />
        <span className='card-content__subtitle'>Loft entero en Medellín</span>
        <h1 className='card-content__title'>New Loft near Parque de los Pies De...</h1>
        <p className='card-content__description'>
          2 huéspedes · 1 habitación · 1 cama · 1 baño · Wifi · Cocina · Estacionamiento gratuito
        </p>
        <div className='card-content__footer'>
          <div className='card-content__reviews'>
            <figure>
              <img src='../../assets/icons/arrow-right.png' alt='' />
              <figcaption>
                <strong>4,25</strong><span>(15 reseñas)</span>
              </figcaption>
            </figure>
          </div>
          <div className='card-content__price'>
            <span>$285,040 </span>COP / noche
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
