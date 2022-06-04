import React from 'react';
// Components
import Title from './Title';
import TravelInformation from './TravelInformation';
import Requirements from './Requirements';
import Politics from './Politics';
import Card from './Card';
// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// Styles
import '../../assets/styles/Data.scss';
import '../../assets/styles/Card.scss';

// Card information
const imgOne = 'https://maidtocleanboise.com/files/2020/01/dl01kitchen.jpg';

const data = [
  { detail: '$285.040 x 1 noche', value: '$285.040' },
  { detail: 'Comisión por servicio', value: '$44.000' },
  { detail: 'Impuestos y tarifas', value: '$20.000' },
];

const total = [{ detail: 'Total', value: '$349.040' }];

const Data = () => {
  return (
    <section className="data">
      <div className="data__booking">
        <p className="data__icon">
          <ArrowBackIosNewIcon />
        </p>
        <Title />
      </div>
      <div className="information">
        <section className="information__left">
          <TravelInformation />
          <Requirements />
          <Politics />
        </section>
        <section className="information__right">
          <section className="App-container">
            <div>
              {/* <div className='bloque_der'> */}
              <Card Img={imgOne} Data={data} Total={total} />
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Data;
