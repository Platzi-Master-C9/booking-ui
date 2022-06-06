import ReactDom from 'react-dom';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarkerDetails } from './MapMarkerDetails';

const MapDetails = () => {
  const [center, setCenter] = useState({ lat: 10.99858, lng: -74.830177 });
  const [zoom, setZoom] = useState(100);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
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
  }, [zoom]);

  return (
    <div style={{ height: '90%', width: '100%', borderRadius: '32px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyByhlmtSqpfGkZwd7phQO56KlP4D5aXNNE' }}
        // defaultCenter={center}
        center={center}
        defaultZoom={zoom}
      >
        {markers.map((marker) => (
          <MapMarkerDetails
            key={marker._id}
            lat={marker.location.coordinates[1]}
            lng={marker.location.coordinates[0]}
            text=""
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
//ReactDom.render(<MapDetails />, document.getElementById('root'));

export { MapDetails };
