import React from "react";
import './ServicesHosting.css';

function ServicesHosting(props)
{
   return (
      <section className="container-services">
         <h2 className="title-services">Lo que este lugar ofrece</h2>

         <ul className="services">
            {props.children}
         </ul>
         <a className="show-more" href="#">Mostrar más</a>
      </section>
   );
}

export { ServicesHosting }