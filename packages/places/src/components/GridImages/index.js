import React from "react";
import './GridImages.css';

function GridImages(props)
{      
   return (
      <section className="hosting">
         <h2 className="nameHosting">New loft near {props.nameHosting}</h2>
         <div className="reputationHosting">
            <div className="dataHosting">
               <img className="start" src="https://omarsav.com/images/booking/startRating.png" alt="Start Rating"/>
               <h5 className="rating" id="rating">{ props.rating }</h5>
               <a href="#" className="reviews"> · { props.reviews } reseñas</a>
               <h5 className="location">{ props.location }</h5>
            </div>
            <button className="saveHosting"><img className="heart" src="https://omarsav.com/images/booking/heartFavorites.png" alt="heart Favorites"/>Guardar</button>
         </div>

         <ul className="containerImgs">
            {props.children}
         </ul>
      </section>
   );
}

export { GridImages };