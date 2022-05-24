import React from 'react';
import Header from '../../../search-engine/src/components/Header';
import HouseRules from '../components/HouseRules/HouseRules';
import Perks from '../components/perks/perks';
import Footer from '../../../search-engine/src/components/Footer';
import { GridImages } from '../components/GridImages'; 
import { ItemImage } from '../components/ItemImage';
import { DescriptionHosting } from '../components/DescriptionHosting'; 
import { ItemBenefit } from '../components/ItemBenefit';
import { MapDetails } from '../components/MapDetails';

//Como no hay de donde obtener las imagenes monte estas provisionalmente en mi servidor, pero
//posteriormente deben cambiarse por las imagenes reales del host
const imgsPlace = 
[
  { urlImg: 'https://omarsav.com/images/booking/image1.png' },
  { urlImg: 'https://omarsav.com/images/booking/image2.png' },
  { urlImg: 'https://omarsav.com/images/booking/image3.png' },
  { urlImg: 'https://omarsav.com/images/booking/image4.png' },
  { urlImg: 'https://omarsav.com/images/booking/image5.png' },
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

const benefits = [
{
  photoBenefit: 'https://omarsav.com/images/booking/cleaning.png',
  title: 'Opciones de limpieza mejoradas',
  description: 'Este anfitrión se comprometió a seguir el proceso de limpieza avanzada de 5 pasos de Booking System.',
},
{
  photoBenefit: 'https://omarsav.com/images/booking/key.png',
  title: 'Acceso sin restricción de horario',
  description: 'Realiza tu llegada fácilmente mediante la caja de seguridad para llaves.',
},
{
  photoBenefit: 'https://omarsav.com/images/booking/pool.png',
  title: 'Piscina',
  description: 'Los huéspedes suelen buscar este popular servicio.',
}]

let key = 0;
export const DetailsPage = () => {
  return (
    <>
    <Header/>
    <GridImages
      nameHosting = { dataPlace.nameHosting }
      rating = { dataPlace.rating }
      reviews = { dataPlace.reviews }
      location = { dataPlace.location }
    >
      {
        imgsPlace.map( imgPlace => (
          <ItemImage
              key = { key++ }
              urlImg  = { imgPlace.urlImg }
          />
      ))}
    </GridImages>
    <DescriptionHosting
      location = { descriptionPlace.location }
      host = { descriptionPlace.host }
      guests = { descriptionPlace.guests }
      rooms = { descriptionPlace.rooms }
      bed = { descriptionPlace.bed }
      bathroom = { descriptionPlace.bathroom }
      photoHost = { descriptionPlace.photoHost }
      description = { descriptionPlace.description }
    >
      {
        benefits.map( benefit => (
          <ItemBenefit
              key = { benefit.title }
              photoBenefit = { benefit.photoBenefit }
              title = { benefit.title }
              description = { benefit.description }
          />   
      ))}     
    </DescriptionHosting> 
    <Perks/>
    <MapDetails/>
    <HouseRules/>
    <p><i>Host Details</i></p>
    <Footer/>
    </>
  )
}
