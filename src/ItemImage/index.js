import React from "react";
import './ItemImage.css';

function ItemImage (props)
{
   return(
      <li className="item">
         <img className="item__img" src={props.urlImg}/>
      </li>
   );
}

export { ItemImage }