import React from "react";
import './ItemBenefit.css';

function ItemBenefit (props)
{
   return(
      <div className="item-benefit">
         <img  className="benefit-image" src={props.photoBenefit} alt="benefit"/>
         <div>
            <h2 className="benefit-title">{props.title}</h2>
            <p className="benefit-description">{props.description}</p>
            <a className="show-more" href={props.link}> Mostrar más</a>
         </div>
      </div>
   );
}

export { ItemBenefit }