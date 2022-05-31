import React, { useState } from 'react';
import SearchBar from '../LandingPage/SearchBar';
import User from '../LandingPage/User';
import ModalFilter from '../Filters/ModalFilters';
import PriceFilter from '../Filters/PriceFilter';
import SizeFilter from '../Filters/SizeFilter';
import StartsFilter from '../Filters/StarsFilter';
import './Header.css';

export default function Header({ classPage, handleSubmitFilters }) {
  let classHeader;
  if (classPage !== 'landing') {
    classHeader = 'header__container';
  } else {
    classHeader = classPage + ' header__container';
  }

  const [visible, setVisible] = useState(null);
  const [minPrice, setMinPrice] = useState(40000);
  const [maxPrice, setMaxPrice] = useState(4000000);
  const [stars, setStars] = useState(null);
  const [fullPlace, setFullPlace] = useState(false);
  const [privateRoom, setPrivateRoom] = useState(false);

  // Size filter

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  }

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  }

  const resetPriceFilter = () => {
    setMinPrice(40000);
    setMaxPrice(40000000);
  }

  const submitPriceFilter = () => {
    setVisible(null);
    sendFitler();
  } 

  // Size filter

  const resetSizeFilter = () => {
    setFullPlace(false);
    setPrivateRoom(false);
  }

  const submitSizeFilter = () => {
    setVisible(null);
    sendFitler();
  }

  // Stars filter

  const handleStar = (numberStars) => {
    setStars(numberStars);
  }

  const resetStars = () => {
    setStars(null);
  }

  const submitStarts = () => {
    setVisible(null);
    sendFitler();
  }

  // Send all filters

  const sendFilter = () => {
    handleSubmitFilters(minPrice, maxPrice, stars, fullPlace, privateRoom);
  }

  return (
    <header className={classHeader}>
      <div className="logo">
        <a href="/">BS</a>
      </div>
      <SearchBar />
      <User classUser={classPage} />
      <div className='filter__container'>
        <ModalFilter 
          title='Precio'
          visible={visible === 'visiblePrice'}
          setVisible={() => setVisible('visiblePrice')}
          reset={resetPriceFilter}
          submitFn={submitPriceFilter}
        >
          <PriceFilter 
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleMinPrice={handleMinPrice}
            handleMaxPrice={handleMaxPrice}
          />
        </ModalFilter>

        <ModalFilter 
          title='Tipo de alojamiento'
          visible={visible === 'visibleSize'}
          setVisible={() => setVisible('visibleSize')}
          reset={resetSizeFilter}
          submitFn={submitSizeFilter}
        >
          <SizeFilter 
            fullPlace={fullPlace}
            privateRoom={privateRoom}
            handleFullPlace={() => setFullPlace(!fullPlace)}
            handlePrivateRoom={() => setPrivateRoom(!privateRoom)}
          />
        </ModalFilter>

        <ModalFilter 
          title='Calificación'
          visible={visible === 'visibleStars'}
          setVisible={() => setVisible('visibleStars')}
          reset={resetStars}
          submitFn={submitStarts}
        >
          <StartsFilter 
            stars={stars}
            handleStar={handleStar} 
          />
        </ModalFilter>
      </div>
    </header>
  );
};
