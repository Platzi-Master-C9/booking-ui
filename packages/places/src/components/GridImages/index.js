import React from "react";
import './GridImages.scss';

function GridImages(props)
{      
   return (
      <section className="hosting">
         <h2 className="hosting__name">{props.nameHosting}</h2>
         <div className="hosting__reputation">
            <div className="info">
               <img className="info__icon-start" src="/places/startRanking.png" alt="Start Ranking"/>
               <h5 className="info__ranking" id="ranking">{ props.ranking }</h5>
               <a href="#" className="info__reviews"> · { props.reviews } reviews</a>
               <h5 className="info__location">{ props.location }</h5>
            </div>
            <button className="button-save"><img src="/places/heartFavorites.png" alt="heart Favorites"/>Save</button>
         </div>

         <ul className="hosting__images">
            {props.children}
         </ul>
      </section>
   );
}

export { GridImages };
