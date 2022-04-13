import React, { useState, useEffect } from "react";

import Header from "./Header"
import Map from "./Map"
import Footer from "./Footer"
import ListResults from "./ListResults"
import Pagination from "./Pagination"
import "./styles/styles.css"

export const ResultsPage = () => {
  
  const [allPlaces, setAllPlaces] = useState([]);
  
  const GetDataFromApi = () => {
    fetch(process.env.REACT_APP_API_RESULTS)
      .then(response => response.json())
      .then(data => setAllPlaces(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    GetDataFromApi();
  },[]);

  console.log('In ResultsPage ', allPlaces)

  const PLACES_PER_PAGE = 10;

  const [ places, setPlaces ] = useState([...allPlaces].splice(0, PLACES_PER_PAGE)); //debbuging
 
  console.log('In places ', places)

  const [ currentPage, setCurrentPage ] = useState(0);
  const TotalPages = Math.ceil(allPlaces.length / PLACES_PER_PAGE);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if(prevPage < 0) { return }
    const currentIndex = prevPage * PLACES_PER_PAGE;

    setPlaces([...dataFromApi].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(prevPage);
  }

  const nextHandler = () => {
    const TotalPlaces = dataFromApi.length;
    const nextPage = currentPage + 1;
    const currentIndex = nextPage * PLACES_PER_PAGE;

    if(currentIndex === TotalPlaces) { return }

    setPlaces([...dataFromApi].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(nextPage);
  }

  return <div className="results__container">
    <Header />

    <section className="section__container">
      <Map />
      <ListResults data={places} />
      <Pagination TotalPages={TotalPages} currentPage={currentPage} prevHandler={prevHandler} nextHandler={nextHandler} />
    </section>

    <Footer />
  </div>
}
