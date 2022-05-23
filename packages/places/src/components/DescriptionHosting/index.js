import React from "react";
import './DescriptionHosting.css';

function DescriptionHosting(props)
{
   return (
      <section className="container-description">
         <div className="header">
            <div className="info">
               <h2 className="title-details">Loft entero en { props.location } · Anfitrión: { props.host }</h2>
               <ul className="spaces-availables">
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
            <a className="show-more" href="#">Mostrar más</a>
         </div>
      </section> 
   );
}

export { DescriptionHosting }