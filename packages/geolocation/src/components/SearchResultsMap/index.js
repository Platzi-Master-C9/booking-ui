import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './MapMarker';

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
    console.log(center);
  }, [center]);

  // Temporal values
  const init = {
    center: {
      lat: 19.4326,
      lng: -99.1332,
    },
    zoom: 15,
  };

  function _onChange(obj) {
    setCenter(obj.center);
  }

  return (
    <div style={{ height: '100vh', width: '100%' }} id="resultMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={init.center}
        zoom={init.zoom}
        onChange={(obj) => _onChange(obj)}
        options={{ scrollwheel: true }}
      >
        {places.map((place) => {
          return (
            <MapMarker
              key={place.id}
              lat={place.location.lat}
              lng={place.location.lng}
              text={`$${place.price} MXN`}
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
