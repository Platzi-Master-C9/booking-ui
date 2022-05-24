import React from "react";
import './ItemImage.scss';

function ItemImage (props)
{
   return(
      <li className="item">
         <img className="item__img" src={props.urlImg}/>
      </li>
   );
}

export { ItemImage }
