import React from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__wrapper">
        <Link href="./">
          <a className="link">About us</a>
        </Link>
        <Link href="./">
          <a className="link">Aim of the project</a>
        </Link>
        <Link href="./">
          <a className="link">Social media</a>
        </Link>
      </div>
    </footer>
  );
}
