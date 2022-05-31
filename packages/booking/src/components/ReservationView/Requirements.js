import React from 'react';
// Components
import SubTitle from './SubTitle';
import Paragraph from './Paragraph';
import Button from './Button';
import TextInformation from './TextInformation';
// Styles
import '../../assets/styles/Requirements.scss';

const Requirements = () => {
  return (
    <section className="requirements">
      <SubTitle>Requerido para tu viaje</SubTitle>
      <div className="requirements__section">
        <div className="requirements__first">
          <Paragraph>Envíale un mensaje al anfitrión</Paragraph>
          <Button type="add">Agregar</Button>
        </div>
        <TextInformation width="487px">
          Cuéntale al anfitrión por qué viajas y cuándo llegas.
        </TextInformation>
      </div>
      <div className="requirements__section">
        <div className="requirements__first">
          <Paragraph>Número de teléfono</Paragraph>
          <Button type="add">Agregar</Button>
        </div>
        <TextInformation width="487px">
          Agrega y confirma tu número de teléfono para recibir información del
          viaje.
        </TextInformation>
      </div>
      <div className="requirements__section">
        <div className="requirements__first">
          <Paragraph>Correo electrónico</Paragraph>
          <Button type="add">Agregar</Button>
        </div>
        <TextInformation width="487px">
          Agrega y confirma tu correo electrónico para recibir un código QR con
          todos los datos de la reserva.
        </TextInformation>
      </div>
    </section>
  );
};

export default Requirements;
