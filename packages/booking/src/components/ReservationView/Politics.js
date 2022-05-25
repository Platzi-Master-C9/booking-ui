import React from 'react';
// Components
import SubTitle from './SubTitle';
import TextInformation from './TextInformation';
import Button from './Button';
// Styles
import '../../assets/styles/Politics.scss';

const Politics = () => {
  return (
    <section className="politics">
      <SubTitle>Politica de cancelación</SubTitle>
      <div className="politics__section">
        <TextInformation width="695px">
          No reembolsable: cancela antes de la llegada y recibe solo la tarifa
          de limpieza, si pagaste una.<br />
          Nuestra Política de causas de fuerza mayor no cubre los problemas de
          viaje causados por el COVID-19.
        </TextInformation>
      </div>
      <Button>Confirmar</Button>
    </section>
  );
};

export default Politics;
