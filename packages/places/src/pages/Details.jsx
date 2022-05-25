import React from 'react';
import Header from '../../../search-engine/src/components/Header';
import HouseRules from '../components/HouseRules/HouseRules';
import Perks from '../components/perks/perks';
import { HostDetails } from '../components/HostDetails/HostDetails';
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
  { urlImg: '/places/image1.png' },
  { urlImg: '/places/image2.png' },
  { urlImg: '/places/image3.png' },
  { urlImg: '/places/image4.png' },
  { urlImg: '/places/image5.png' },
]

//Este codigo nos genera una funcion aleatoria que nos da el ranking y el numero de reseñas provisionalmente 
const minInt = 1;
const maxInt = 5;
const minFloat = 0;
const maxFloat= 99;
let getNumber = '';
let rankingPlace = '';
let reviews = '';

function random(min, max) 
{
   getNumber = (Math.floor((Math.random() * (max - min + 1)) + min));
}

random (minInt, maxInt);
rankingPlace = getNumber; 

if(getNumber != 5)
{
  random (minFloat, maxFloat);
  rankingPlace = `${rankingPlace}.${getNumber}`
}

random(minFloat, maxFloat)
reviews = getNumber;

let dataPlace = 
{
  nameHosting: 'Parque de los Pies Descalsos', 
  ranking: `${rankingPlace}`,
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
  photoHost: '/places/photo_profile.png', 
  description: 'Te va a encantar mi espacio principalmente por la excelente ubicación Vivo frente al Parque de los Pies Descalsos, esta es una de las principales lugares de Medellín y conecta los barrios más al norte de la ciudad. Parque de los Pies Descalsos es conocido por ser el mejor lugar para hospedarse en Medellín debido a todos los excelentes bares y clubes, restaurantes y centros comerciales, y la reputación de ser la zona más bonita y segura de la ciudad.'
}

const benefits = [
{
  photoBenefit: '/places/cleaning.png',
  title: 'Opciones de limpieza mejoradas',
  description: 'Este anfitrión se comprometió a seguir el proceso de limpieza avanzada de 5 pasos de Booking System.',
},
{
  photoBenefit: '/places/key.png',
  title: 'Acceso sin restricción de horario',
  description: 'Realiza tu llegada fácilmente mediante la caja de seguridad para llaves.',
},
{
  photoBenefit: '/places/pool-benefit.png',
  title: 'Piscina',
  description: 'Los huéspedes suelen buscar este popular servicio.',
}]

const hostDetails =
  {
    host: 'Laura',
    id: true,
    photoHost : '/places/photo_profile.png',
    ratings: '221',
    registerDate: 'Febrero 2018',
    hostBio: `Hola, mi nombre es Laura  y soy del hermoso y colorido norte de Colombia. Vine a Medellín hace 10 años para sentirme  mitad costeña y mitad paisa, mi cultura es una mezcla compleja ya que también he vivido en el extranjero. Soy ingeniera civil que actualmente estudia francés. Disfruto...`,
    languages: 'Español, Inglés y Francés',
    responseIndex : 98 ,
    responseTime: 'En menos de una hora'
  }


let key = 0;
export const DetailsPage = () => {
  return (
    <>
    <Header/>
    <GridImages
      nameHosting = { dataPlace.nameHosting }
      ranking = { dataPlace.ranking }
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
    < HostDetails 
      host = {hostDetails.host}
      id = {hostDetails.id}
      photoHost= {hostDetails.photoHost}
      registerDate = {hostDetails.registerDate}
      ratings = {hostDetails.ratings}
      hostBio = {hostDetails.hostBio}
      languages =  {hostDetails.languages}
      responseIndex = {hostDetails.responseIndex}
      responseTime = {hostDetails.responseTime}
      />
    <Footer/>
    </>
  )
}
