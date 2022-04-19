import React from 'react';
import SearchBar from '../LandingPage/SearchBar';
import User from '../LandingPage/User';
import './Header.css';

export default function Header({ classPage }) {
  let classHeader;
  if (classPage !== 'landing') {
    classHeader = 'header__container';
  } else {
    classHeader = classPage + ' header__container';
  }

  return (
    <header className={classHeader}>
      <div className="logo">
        <a href="/">BS</a>
      </div>
      <SearchBar />
      <User classUser={classPage} />
    </header>
  );
}
