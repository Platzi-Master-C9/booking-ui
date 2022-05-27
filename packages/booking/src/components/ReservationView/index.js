import React from 'react';
// Components
import Header from './Header';
import Footer from './Footer';
import Data from './Data';
// Styles
import '../../assets/styles/Booking.scss';

export const Reservation = () => {
  return (
    <section className="booking">
      <Header />
      <Data />
      <Footer />
    </section>
  );
};
