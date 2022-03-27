import React from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { User } from "./User";
import "../style/Header.css";

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
