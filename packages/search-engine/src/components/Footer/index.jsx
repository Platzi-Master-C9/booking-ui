import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__wrapper">
        <a className="link" href="./">
          About us
        </a>
        <a className="link" href="./">
          Aim of the project
        </a>
        <a className="link" href="./">
          Social media
        </a>
      </div>
    </footer>
  );
}
