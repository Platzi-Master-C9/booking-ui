import React from "react";
import './ItemService.css';

function ItemService (props)
{
   return(
      <li className="item-service">
         {/* <img className="icon-service" src={props.kitchen_url} alt="Service"/> */}
         {props.name}
      </li>
   );
}

export { ItemService }