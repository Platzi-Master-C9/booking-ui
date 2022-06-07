import React, { useState } from 'react';
import Link from 'next/link';
import './SearchBar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = () => {
  const [showMenu, setShowMenu] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleMenu = (e) => {
    !showMenu ? setShowMenu('show_menu-guest') : setShowMenu(null);
    e.stopPropagation();
  };

  return (
    <form className="search__container">
      <div className="search_location">
        <label>Location</label>
        <input type="text" placeholder="Where're you going?" />
      </div>
      <div className="search_location search_arrivalDepartures">
        <label>Arrival</label>
        <DatePicker
          className="picker_box"
          placeholderText="Add dates"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="search_location search_arrivalDepartures">
        <label>Departure</label>
        <DatePicker
          className="picker_box"
          placeholderText="Add dates"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="search_location search_Guests">
        <label>Guests</label>
        <div className="input-disable" onClick={toggleMenu}>
          How Many?
        </div>
        <div className={`menu_guest ${showMenu}`}>
          <div className="menu-options">
            <p>Adults</p>
            <input type="number" min={0} max={9} />
          </div>
          <div className="menu-options">
            <p>Children</p>
            <input type="number" min={0} max={9} />
          </div>
          <div className="menu-options">
            <p>Pets</p>
            <input type="number" min={0} max={9} />
          </div>
        </div>
      </div>
      <div className="icon-search">
        <Link href="/search">
          <a className="icon-png"></a>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
