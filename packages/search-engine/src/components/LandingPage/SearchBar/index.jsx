import React from 'react';
import './SearchBar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = () => {
  return (
    <form className="search__container">
      <div className="search_location">
        <label>Location</label>
        <input type="text" placeholder="Where're you going?" />
      </div>
      <div className="search_arrivalDepartures">
        <label>Arrival</label>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search_arrivalDepartures">
        <label>Departure</label>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search_Guests">
        <label>Guests</label>
        <input type="text" placeholder="How Many?" />
      </div>
      <button>
        <img />
      </button>
    </form>
  );
};

export default SearchBar;
