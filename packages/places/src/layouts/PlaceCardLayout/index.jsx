import { PlaceCard } from '../../components/PlaceCard';
import { Slider } from '../../components/Slider';
import { useGetPlaces } from '../../hooks/useGetPlaces';

const PlaceCardLayout = () => {
  const { data: places, error, loading } = useGetPlaces();
  console.log(places);

  return (
    <>
      {error && <p>Error fetching posts: {error.message}</p>}

      {loading && <h1>Loading Places...</h1>}

      {places &&
        places.map((place) => (
          <PlaceCard key={place.id} data={place}>
            <Slider sliderImages={place.images}></Slider>
          </PlaceCard>
        ))}
    </>
  );
};

export { PlaceCardLayout };
