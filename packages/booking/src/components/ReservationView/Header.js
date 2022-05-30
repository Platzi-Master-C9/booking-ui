import React from 'react';
// Components
import Logo from './Logo';

// Styles
import '../../assets/styles/Header.scss';

const Header = () => {
  return (
    <section className="header">
      {/* Según el diseño puede recibir dos parámetros, white o blue */}
      <Logo type={'blue'} />
    </section>
  );
};

export default Header;
