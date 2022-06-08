// External dependencies
import React from 'react';

// Internal dependencies
import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.footer}>
      <a href="/">
        Sobre nosotros
      </a>
      <a href="/">
        Propósito del proyecto
      </a>
      <a href="/">
        Redes sociales
      </a>
    </footer>
  );
}

export default Footer;
