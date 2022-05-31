import React from "react";
import './ItemBenefit.scss';

function ItemBenefit (props)
{
   return(
      <div className="item-benefit">
         <img  className="item-benefit__image" src={props.photoBenefit} alt="benefit"/>
         <div>
            <h2 className="item-benefit__title">{props.title}</h2>
            <p className="item-benefit__description">{props.description}</p>
            <a className="show-more" href="#"> Mostrar más</a>
         </div>
      </div>
   );
}

export { ItemBenefit }
