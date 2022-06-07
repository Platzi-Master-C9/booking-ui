import React from 'react';
import './Card.css';

const CardComponent = (props) => {
  const { subtitle, title, description, rating, price, reviews, image } = props
  return (
    <div className='wrap-card'>
      <div className='wrap-slider'>
        <div className='slider-arrow__right'></div>
        <img src={image} alt='' />
      </div>
      <div className='card-content'>
        <img className='card-content__fav' src='/search-engine/icon-heart.png' alt='' />
        <span className='card-content__subtitle'>{subtitle}</span>
        <h1 className='card-content__title'>{title}</h1>
        <p className='card-content__description'>
          {description}
        </p>
        <div className='card-content__footer'>
          <div className='card-content__reviews'>
            <figure>
              <img src='/search-engine/icon-star.png' alt='' />
              <figcaption className='card-content__reviews_text'>
                <strong>{rating}</strong><span>({reviews} reviews)</span>
              </figcaption>
            </figure>
          </div>
          <div className='card-content__price'>
            <span>${price} </span> night
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
