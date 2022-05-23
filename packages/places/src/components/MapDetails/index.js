import React from "react";
import './MapDetails.css';

function MapDetails()
{      
   return (
      <section className="map">
         <div className="container-global">
            <h2 className="map__title-details">A dónde irás</h2>
            <img className="map__image" src="https://omarsav.com/images/booking/map.svg" />
         </div>
      </section>
   );
}

export { MapDetails };