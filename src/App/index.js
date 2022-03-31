import React from 'react';
import './App.css';
import { DataHostingUI } from './DataHostingUI';

//Como no hay de donde obtener las imagenes monte estas provisionalmente en mi servidor, pero
//posteriormente deben cambiarse por las imagenes reales del host
const imgsPlace = 
[
   { urlImg: 'https://omarsav.com/images/booking/image1.png' },
   { urlImg: 'https://omarsav.com/images/booking/image2.png' },
   { urlImg: 'https://omarsav.com/images/booking/image3.png' },
   { urlImg: 'https://omarsav.com/images/booking/image4.png' },
   { urlImg: 'https://omarsav.com/images/booking/image5.png' }
]

//Este codigo nos genera una funcion aleatoria que nos da el rating y el numero de reseñas provisionalmente 
const minInt = 1;
const maxInt = 5;
const minFloat = 0;
const maxFloat= 99;
let getNumber = '';
let ratingPlace = '';
let reviews = '';

function random(min, max) 
{
   getNumber = (Math.floor((Math.random() * (max - min + 1)) + min));
}

random (minInt, maxInt);
ratingPlace = getNumber; 

if(getNumber != 5)
{
   random (minFloat, maxFloat);
   ratingPlace = `${ratingPlace}.${getNumber}`
}

random(minFloat, maxFloat)
reviews = getNumber;

let dataPlace = 
{
   nameHosting: 'Parque de los Pies Descalsos', 
   rating: `${ratingPlace}`,
   reviews: `${reviews}`, 
   location: 'Medellín, Antioquia, Colombia',
}

const descriptionPlace = 
{
   location: 'Medellín', 
   host: 'Laura',
   guests: '2 huespedes',
   rooms: '1 habitación',
   bed: '1 cama',
   bathroom: '1 baño',
   photoHost: 'https://omarsav.com/images/booking/photo_profile.png', 
   description: 'Te va a encantar mi espacio principalmente por la excelente ubicación Vivo frente al Parque de los Pies Descalsos, esta es una de las principales lugares de Medellín y conecta los barrios más al norte de la ciudad. Parque de los Pies Descalsos es conocido por ser el mejor lugar para hospedarse en Medellín debido a todos los excelentes bares y clubes, restaurantes y centros comerciales, y la reputación de ser la zona más bonita y segura de la ciudad.'
}

const benefits = 
[
   {
      photoBenefit: 'https://omarsav.com/images/booking/cleaning.png',
      title: 'Opciones de limpieza mejoradas',
      description: 'Este anfitrión se comprometió a seguir el proceso de limpieza avanzada de 5 pasos de Booking System.',
      link: ''
   },
   {
      photoBenefit: 'https://omarsav.com/images/booking/key.png',
      title: 'Acceso sin restricción de horario',
      description: 'Realiza tu llegada fácilmente mediante la caja de seguridad para llaves.',
      link: ''
   },
   {
      photoBenefit: 'https://omarsav.com/images/booking/pool.png',
      title: 'Piscina',
      description: 'Los huéspedes suelen buscar este popular servicio.',
      link: ''
   }
]

const servicesImgs = 
[
   { kitchen_url: 'https://omarsav.com/images/booking/kitchen.png' },
   { garage_url: 'https://omarsav.com/images/booking/garage.png' },
   { tv_url: 'https://omarsav.com/images/booking/tv.png' },
   { washingMachine_url: 'https://omarsav.com/images/booking/washingMachine.png' },
   { wifi_url: 'https://omarsav.com/images/booking/wifi.png' },
   { pool_url: 'https://omarsav.com/images/booking//pool.png' },
   { hotWater_url: 'https://omarsav.com/images/booking/bathtub.png' },
   { heating_url: 'https://omarsav.com/images/booking/heating.png' },
]

const servicesNames =
[
   { name: 'Cocina' },
   { name: 'Wifi' },
   { name: 'Estacionamiento Gratuito' },
   { name: 'Piscina' },
   { name: 'Televisor con cable estándar' },
   { name: 'Agua caliente' },
   { name: 'Lavadora' },
   { name: 'Calefacción' }

]

function App() {
   return (  
      <DataHostingUI
         imgsPlace = { imgsPlace }
         dataPlace = { dataPlace }
         descriptionPlace = { descriptionPlace }
         benefits = { benefits }
         servicesImgs = { servicesImgs }
         servicesNames = { servicesNames }
      />
   );
}

export default App;