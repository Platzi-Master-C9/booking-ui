// External dependencies
import React from 'react';

// Internal dependencies
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <div
        className={classes.logoContainer}
        style={{
          backgroundColor: '#1572A1',
        }}
      >
        <a href="/">
          BS
        </a>
      </div>

      <div className={classes.user}>
        <a href="/">
          Hazte anfitrión
        </a>

        <div className={classes.logoContainer}>
          <a href="/">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Booking Services logo" />
          </a>
        </div>

        <span className={classes.badge}>
          1
        </span>
      </div>
    </header>
  );
}

export default Header;
