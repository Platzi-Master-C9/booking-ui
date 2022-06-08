//import ReactDom from 'react-dom';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarkerDetails from './MapMarkerDetails/index';

const PlacesDetailsMap = () => {
  const [center, setCenter] = useState({ lat: 6.2393553, lng: -75.5818394 });
  const [zoom, setZoom] = useState(500);
  const [markers, setMarkers] = useState([
    { id: 1, lat: 6.2393553, lng: -75.5818394 },
  ]);

  /*useEffect(() => {
    fetch(
      'http://localhost:3000/geolocation/places?lon=-74.830177&lat=10.99858&radius=1000000'
    )
      .then((response) => response.json())
      .then((data) => {
        setMarkers(data);
        setCenter({
          lat: data[0].location.coordinates[1],
          lng: data[0].location.coordinates[0],
        });
      })
      .catch((error) => console.log(error));
    }, [zoom]);*/

  return (
    <div style={{ height: '35vh', width: '100%', borderRadius: '32px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyByhlmtSqpfGkZwd7phQO56KlP4D5aXNNE' }}
        // defaultCenter={center}
        center={center}
        defaultZoom={18}
      >
        {markers.map(({ id, lat, lng }) => (
          <MapMarkerDetails key={id} lat={lat} lng={lng} text="" />
        ))}
      </GoogleMapReact>
    </div>
  );
};
//ReactDom.render(<MapDetails />, document.getElementById('root'));

export { PlacesDetailsMap };
