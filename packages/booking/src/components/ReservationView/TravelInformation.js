import React from 'react';
// Components
import SubTitle from './SubTitle';
import Paragraph from './Paragraph';
import EditButton from './EditButton';
import TextInformation from './TextInformation';
// Styles
import '../../assets/styles/TravelInformation.scss';

const TravelInformation = () => {
  return (
    <section className="travelInformation">
      <SubTitle>Tu viaje</SubTitle>
      <div className="travelInformation__section">
        <div className="travelInformation__first">
          <Paragraph>Fechas</Paragraph>
          <EditButton>Editar</EditButton>
        </div>
        <TextInformation>20 de mar - 21 de mar</TextInformation>
      </div>
      <div className="travelInformation__section">
        <div className="travelInformation__first">
          <Paragraph>Huéspedes</Paragraph>
          <EditButton>Editar</EditButton>
        </div>
        <TextInformation>1 huésped</TextInformation>
      </div>
    </section>
  );
};

export default TravelInformation;
