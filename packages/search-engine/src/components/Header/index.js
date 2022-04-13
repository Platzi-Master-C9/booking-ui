import React from 'react';
import { Logo } from '../LandingPage/Logo';
import { SearchBar } from '../LandingPage/SearchBar';
import { User } from '../LandingPage/User';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <SearchBar />
      <User />
    </header>
  );
};

export { Header };
