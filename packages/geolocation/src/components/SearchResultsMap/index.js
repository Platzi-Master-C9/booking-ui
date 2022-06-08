import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './MapMarker';
import './resultsMapStyles.css';

/* 
  @param {Object} initCenter - Initial center to render the map
  @param {number} initCenter.lat - Initial latitude
  @param {number} initCenter.lng - Initial longitude
  @param {number} initCenter.zoom - Initial zoom
*/

function SearchResultsMap({ initCenter, initPlaces }) {
  const [center, setCenter] = React.useState({});
  const [places, setPlaces] = React.useState(initPlaces);

  React.useEffect(() => {
    // Call corresponding api to get and set places
    // console.log(center);
  }, [center]);

  // Temporal values
  const init = {
    center: {
      lat: 6.246112,
      lng: -75.590526,
    },
    zoom: 15,
  };

  function _onChange(obj) {
    setCenter(obj.center);
  }

  return (
    <div
      id="resultMap"
      className="resultMap"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyByhlmtSqpfGkZwd7phQO56KlP4D5aXNNE' }}
        center={init.center}
        zoom={init.zoom}
        onChange={(obj) => _onChange(obj)}
        options={{ scrollwheel: true }}
      >
        {initPlaces.map((place) => {
          return (
            <MapMarker
              key={place.id}
              lat={place.location.lat}
              lng={place.location.lng}
              text={`$${place.price} COP`}
              place={place}
            />
          );
        })}

        {/* <MapMarker lat={19.4332} lng={-99.1321} text={'$450 MXN'}></MapMarker> */}
      </GoogleMapReact>
    </div>
  );
}

export { SearchResultsMap };
