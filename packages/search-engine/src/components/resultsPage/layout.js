import React, { useState } from "react";

import Header from "../Header"
import Map from "../Map"
import Footer from "../Footer"
import ListResults from "./ListResults"
import Pagination from "./Pagination"
import "./styles/style.css"
import { DATA_API } from "./API/data";
// import getData from "./API/getData";

export const ResultsPage = () => {
// export const ResultsPage = ({ DataFromApi }) => {
  const PLACES_PER_PAGE = 10;
  
  const [ allPlaces, setAllPlaces ] = useState(DATA_API); //debbuging
  // const [ allPlaces, setAllPlaces ] = useState(DataFromApi); //debbuging
  const [ places, setPlaces ] = useState([...allPlaces].splice(0, PLACES_PER_PAGE)); //debbuging
  const [ currentPage, setCurrentPage ] = useState(0);
  const TotalPages = Math.ceil(allPlaces.length / PLACES_PER_PAGE);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if(prevPage < 0) { return }
    const currentIndex = prevPage * PLACES_PER_PAGE;

    setPlaces([...allPlaces].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(prevPage);
  }

  const nextHandler = () => {
    const TotalPlaces = allPlaces.length;
    const nextPage = currentPage + 1;
    const currentIndex = nextPage * PLACES_PER_PAGE;

    if(currentIndex === TotalPlaces) { return }

    setPlaces([...allPlaces].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(nextPage);
  }

  return (
    <div className="results__container">
      <Header />

      <section className="section__container">
        <Map />
        <ListResults 
          data={places} 
        />
        <Pagination 
          TotalPages={TotalPages} 
          currentPage={currentPage} 
          prevHandler={prevHandler} 
          nextHandler={nextHandler} 
        />
      </section>

      <Footer />
    </div>
  )
}
