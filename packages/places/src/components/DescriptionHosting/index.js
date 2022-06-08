import React from "react";
import './DescriptionHosting.scss';
import './card.scss';

function DescriptionHosting(props) {
   const nights = 1;
   return (
      <section className="container-description">
         <div>
            <div className="info">
               <h2 className="info__title">Entire loft in { props.location } · Host: { props.host }</h2>
               <ul className="info__spaces-availables">
                  <li>{props.guests} <span>·</span></li>
                  <li>{props.rooms} <span>·</span></li>
                  <li>{props.bed} <span>·</span></li>
                  <li>{props.bathroom} <span>·</span></li>
               </ul>
            </div>
            <img src={props.photoHost} alt="photo host"/>
         </div>

         <div className="container-global">
            {props.children}
         </div>

         <div className="container-global">
            <p className="description-text">{props.description}</p>
            <a className="show-more" href="#">More info</a>
         </div>
         {/* card */}
         <div className="card_container">
         <div className="card_title">
            <p>${props.dataPlace.price} <span>night</span></p>
            <div className="card_title-reviews">
               <img className="icon-start" src="/places/startRanking.png" alt="Start Ranking" />
               <p className="ranking">{ props.dataPlace.ranking }</p>
               <p className="reviews"> · { props.dataPlace.reviews } reviews</p>
            </div>
         </div>
         <div className="card_nights">
            <p>How many days do you want to book:</p>
            <input type="number" min={1} />
         </div>
         <button className="card_btn">Reserve</button>
         <p>You won't be charged yet</p>

         <p>${props.dataPlace.price} x {nights} nihgts</p>
         <p className="card_total">Total ${props.dataPlace.price * nights}</p>
         </div>
      </section> 
   );
}

export { DescriptionHosting }
