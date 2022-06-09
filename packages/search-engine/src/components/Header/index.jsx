import React, { useState } from 'react';
import SearchBar from '../LandingPage/SearchBar';
import User from '../LandingPage/User';
import ModalFilter from '../Filters/ModalFilters';
import PriceFilter from '../Filters/PriceFilter';
import SizeFilter from '../Filters/SizeFilter';
import StartsFilter from '../Filters/StarsFilter';
import './Header.css';

export default function Header({ classPage, filters, handleSubmitFilters }) {
  let classHeader = (classPage !== 'landing') ? 'header__container' : `${classPage} header__container`;
  let showFilters = (!filters) ? 'hidden' : ' ';

  const [visible, setVisible] = useState(null);
  const [minPrice, setMinPrice] = useState(40000);
  const [maxPrice, setMaxPrice] = useState(4000000);
  const [stars, setStars] = useState(null);
  const [fullPlace, setFullPlace] = useState(false);
  const [privateRoom, setPrivateRoom] = useState(false);
  const [sharedRoom, setSharedRoom] = useState(false);

  const toggleVisibility = (key) => !visible ? setVisible(key) : setVisible(null);

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
    sendFilter();
    toggleVisibility('visiblePrice');
  } 

  // Size filter

  const resetSizeFilter = () => {
    setFullPlace(false);
    setPrivateRoom(false);
  }

  const submitSizeFilter = () => {
    sendFilter();
    toggleVisibility('visibleSize');
  }

  // Stars filter

  const handleStar = (numberStars) => {
    setStars(numberStars);
  }

  const resetStars = () => {
    setStars(null);
  }

  const submitStarts = () => {
    sendFilter();
    toggleVisibility('visibleStars');
  }

  // Send all filters

  const sendFilter = () => {
    handleSubmitFilters(true);
  }

  return (
    <header className={classHeader}>
      <div className="logo__header">
        <a href="/">BS</a>
      </div>
      <SearchBar />
      <User classUser={classPage} />
      <div className={`filter__container ${showFilters}`}>
        <ModalFilter 
          title='Price range'
          visible={visible === 'visiblePrice'}
          setVisible={() => toggleVisibility('visiblePrice')}
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
          title='Type of place'
          visible={visible === 'visibleSize'}
          setVisible={() => toggleVisibility('visibleSize')}
          reset={resetSizeFilter}
          submitFn={submitSizeFilter}
        >
          <SizeFilter 
            fullPlace={fullPlace}
            privateRoom={privateRoom}
            sharedRoom={sharedRoom}
            handleFullPlace={() => setFullPlace(!fullPlace)}
            handlePrivateRoom={() => setPrivateRoom(!privateRoom)}
            handleSharedRoom={() => setSharedRoom(!sharedRoom)}
          />
        </ModalFilter>

        <ModalFilter 
          title='Rating'
          visible={visible === 'visibleStars'}
          setVisible={() => toggleVisibility('visibleStars')}
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
