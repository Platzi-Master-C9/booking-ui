import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { SearchResultsMap } from '@booking-ui/geolocation';
import Footer from '../Footer';
import { ListResults } from './ListResults';
import { Pagination } from './Pagination';
import './styles/style.css';
import { getData } from '../../scripts/petitions';
import { ErrorMessage } from '../ErrorMessage';

const PLACES_PER_PAGE = 10;
const key = 15;

const ResultsPage = () => {
  const [allPlaces, setAllPlaces] = useState([]);

  const [renderedPlaces, setRenderedPlaces] = useState([]);
  const [dataState, setDataState] = useState({ loading: true, error: false });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      handleSubmitFilters(false);
      setDataState({ ...dataState, loading: false });
    } catch (error) {
      setDataState({ ...dataState, error: error });
    }
  }, []);

  useEffect(() => {
    if (allPlaces) {
      setRenderedPlaces([...allPlaces].splice(0, PLACES_PER_PAGE));
      setTotalPages(Math.ceil(allPlaces.length / PLACES_PER_PAGE));
    }
  }, [allPlaces]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) {
      return;
    }
    const currentIndex = prevPage * PLACES_PER_PAGE;

    setRenderedPlaces([...allPlaces].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    const TotalPlaces = allPlaces.length;
    const nextPage = currentPage + 1;
    const currentIndex = nextPage * PLACES_PER_PAGE;

    if (currentIndex >= TotalPlaces) {
      return;
    }

    setRenderedPlaces([...allPlaces].splice(currentIndex, PLACES_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const handleSubmitFilters = async (filter) => {
    const { sites } = await getData(filter);
    if (sites.error) {
      setError('Ha ocurrido un error al obtener los lugares');
      return;
    }
    setAllPlaces(sites);
  };

  return (
    <div className="results__container">
      <Header filters={true} handleSubmitFilters={handleSubmitFilters} />

      <section className="section__container">
        <SearchResultsMap initPlaces={renderedPlaces} />

        {!error ? (
          <>
            <ListResults places={renderedPlaces} statePlaces={dataState} />
            <Pagination
              TotalPages={totalPages}
              currentPage={currentPage}
              prevHandler={prevHandler}
              nextHandler={nextHandler}
            />
          </>
        ) : (
          <ErrorMessage message={error} />
        )}
      </section>

      <Footer />
    </div>
  );
};

export { ResultsPage };
