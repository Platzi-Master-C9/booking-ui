import React, { useEffect, useState } from "react";

import Header from "../Header"
import { Map } from "../Map"
import Footer from "../Footer"
import { ListResults } from "./ListResults"
import { Pagination } from "./Pagination"
import "./styles/style.css"
import { getData } from "./API/getData";

const PLACES_PER_PAGE = 10;
const key = 15;

const ResultsPage = () => {
  
  const [ allPlaces, setAllPlaces ] = useState([]);

  const [ renderedPlaces, setRenderedPlaces ] = useState([]);
  const [ dataState, setDataState ] = useState({ loading: true, error: false });
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ TotalPages, setTotalPages ] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      getData(key).then(res => setAllPlaces(res.data));
      setDataState({ ...dataState, loading: false });
    } catch(error) {
      setDataState({ ...dataState, error: error });
    }
  }, []);

  useEffect(() => {
    setRenderedPlaces([...allPlaces].splice(0, PLACES_PER_PAGE));

  useEffect(() => {
    setPlaces([...allPlaces].splice(0, PLACES_PER_PAGE));
    setTotalPages(Math.ceil(allPlaces.length / PLACES_PER_PAGE));
  }, [allPlaces]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if(prevPage < 0) { return }
    const currentIndex = prevPage * PLACES_PER_PAGE;

    setRenderedPlaces([...allPlaces].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(prevPage);
  }

  const nextHandler = () => {
    const TotalPlaces = allPlaces.length;
    const nextPage = currentPage + 1;
    const currentIndex = nextPage * PLACES_PER_PAGE;

    if(currentIndex >= TotalPlaces) { return }

    setRenderedPlaces([...allPlaces].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(nextPage);
  }

  const handleSubmitFilters = async (minPrice, maxPrice, stars, fullPlace, privateRoom) => {
    const baseURL = 'https://624c7e76d71863d7a80bb010.mockapi.io/places/places'

    try {
      const response = await window.fetch(baseURL);
      if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
      }
      const data = await response.json();
      setAllPlaces(data);
    } catch (error) {
      console.error(error.message, 'error');
      setError(error)
    }
  }

  return (
    <div className="results__container">
      <Header handleSubmitFilters={handleSubmitFilters} />

      <section className="section__container">
        <Map />
        <ListResults 
          places={renderedPlaces}
          statePlaces={dataState}
        />
        <Pagination 
          TotalPages={totalPages} 
          currentPage={currentPage} 
          prevHandler={prevHandler} 
          nextHandler={nextHandler} 
        />
      </section>

      <Footer />
    </div>
  )
}

export { ResultsPage };
