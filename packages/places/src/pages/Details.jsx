import React from 'react';
import Header from '../../../search-engine/src/components/Header';
import HouseRules from '../components/HouseRules/HouseRules';
import Perks from '../components/perks/perks';
import Footer from '../../../search-engine/src/components/Footer'

export const DetailsPage = () => {
  return (
    <>
    <Header/>
    <p><i>Place: name, rating, reviews and photos</i></p><hr/>
    <p><i>Benefits and services of a hosting</i></p><hr/>
    <Perks/><hr/>
    <p><i>Location</i></p><hr/>
    <HouseRules/>
    <p><i>Host Details</i></p><hr/>
    <Footer/>
    </>
  )
}
