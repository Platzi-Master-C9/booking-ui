import React from 'react';
import '../../assets/styles/Card.scss';

const Card = ({
  TextImg = 'New Loft near Parque de los Pies Descalsos',
  Img,
  HeaderDetails = 'Detalles del precio',
  Data,
  Total,
}) => {
  return (
    <div className="Container">
      <div className="Container_Imagen">
        <img className="Imagen" src={Img} alt="Imagen 1" />
        <p>{TextImg}</p>
      </div>
      <div className="Container_Details">
        <h3 className="Header_3">{HeaderDetails}</h3>
        {Data.map((e, index) => (
          <div key={index} className="xDetails">
            <p>{e.detail}</p>
            <p>{e.value}</p>
          </div>
        ))}
        <hr />
        {Total.map((e, index) => (
          <div key={index} className="Total">
            <p>{e.detail}</p>
            <p>{e.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
