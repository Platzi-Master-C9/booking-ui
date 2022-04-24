import React, { useEffect, useState } from "react";

import { Header } from "../Header"
import { Map } from "../Map"
import { Footer } from "../Footer"
import { ListResults } from "./ListResults"
import { Pagination } from "./Pagination"
import "./styles/style.css"
import { getData } from "./API/getData";

const PLACES_PER_PAGE = 10;
const keys = 1;

const ResultsPage = () => {
// const ResultsPage = ({ keys }) => {
  
  const [ allPlaces, setAllPlaces ] = useState([]); //debbuging

  const [ renderedPlaces, setRenderedPlaces ] = useState([]); //rendered places in the current page
  const [ loading, setLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ TotalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      getData(keys).then(res => setAllPlaces(res.data));
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setRenderedPlaces([...allPlaces].splice(0, PLACES_PER_PAGE));
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

  if(loading) {
    return (
      <div className="results__container">
        <Header />
  
        <section className="section__container">
          <Map />
          <section className='list__results'>
            <div className="results__card">
              Loading...
            </div>
          </section>
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
  } else {
    return (
      <div className="results__container">
        <Header />
  
        <section className="section__container">
          <Map />
          <ListResults 
            places={renderedPlaces} 
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
}

export { ResultsPage };
