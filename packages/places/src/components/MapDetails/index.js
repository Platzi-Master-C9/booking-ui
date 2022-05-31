import React from "react";
import './MapDetails.scss';

function MapDetails()
{      
   return (
      <section className="map">
         <div className="container-global">
            <h2 className="map__title-details">A dónde irás</h2>
            <img className="map__image" src="/places/map.png" />
         </div>
      </section>
   );
}

export { MapDetails };
