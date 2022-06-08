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
import { PlacesDetailsMap } from '../../../geolocation/src/components/PlaceMapDetails';

const imgsPlace = [
  { urlImg: 'https://a0.muscache.com/im/pictures/miso/Hosting-47981641/original/6d51bdc0-7002-4100-ab65-dba95be57b61.jpeg?im_w=720' },
  { urlImg: 'https://a0.muscache.com/im/pictures/66fa0a00-1d62-4e6a-b479-2ce51549e697.jpg?im_w=720' },
  { urlImg: 'https://a0.muscache.com/im/pictures/miso/Hosting-47981641/original/d073cefc-81cc-4555-a555-da87dba81f5e.jpeg?im_w=720' },
  { urlImg: 'https://a0.muscache.com/im/pictures/miso/Hosting-47981641/original/d9b842ed-c0f2-4b75-84c8-c45c56c2b617.jpeg?im_w=720' },
  { urlImg: 'https://a0.muscache.com/im/pictures/miso/Hosting-47981641/original/fee10cc2-9930-43d1-bf65-9a3c4f1213b1.jpeg?im_w=720' },
];

const dataPlace = {
  nameHosting: 'Rustic & Modern Flat in the heart of Laureles',
  ranking: 4.9,
  reviews: 63,
  price: 43,
  location: 'Medellín, Antioquia, Colombia',
};

const descriptionPlace = {
  location: 'Medellín',
  host: 'Laura',
  guests: '2 guests',
  rooms: '1 room',
  bed: '1 bed',
  bathroom: '1 bath',
  photoHost: '/places/photo_profile.png',
  description:
    'You are going to love my space mainly because of the excellent Vivo location in front of the Parque de los Pies Descalsos, this is one of the main places of Medellin and connects the most northern neighborhoods of the city. Parque de los Pies Descalsos is known to be the best place to stay in Medellin due to all the excellent bars and clubs, restaurants and shopping centers, and the reputation of being the most beautiful and safe area of the city.',
};

const benefits = [
  {
    photoBenefit: '/places/cleaning.png',
    title: 'Improved cleaning options',
    description:
      'This host committed to follow the 5-step advanced cleaning process of Booking System.',
  },
  {
    photoBenefit: '/places/key.png',
    title: 'Unrestricted access to the premises',
    description:
      'Make your arrival easily using the key safe.',
  },
  {
    photoBenefit: '/places/pool-benefit.png',
    title: 'Pool',
    description: 'Guests often search for this popular service.',
  },
];

const hostDetails = {
  host: 'Laura',
  id: true,
  photoHost: '/places/photo_profile.png',
  ratings: '221',
  registerDate: 'February 2018',
  hostBio:
    'Hello, my name is Laura and I am from the beautiful and colorful north of Colombia. I came to Medellín 10 years ago to feel half coastal and half country, my culture is a complex mix since I have also lived abroad. I am a civil engineer currently studying French. I enjoy...',
  languages: 'Spanish, English y French',
  responseIndex: 98,
  responseTime: 'In less than an hour',
};

let key = 0;
export function DetailsPage() {
  return (
    <>
      <Header />

      <GridImages
        nameHosting={dataPlace.nameHosting}
        ranking={dataPlace.ranking}
        reviews={dataPlace.reviews}
        location={dataPlace.location}
      >
        {imgsPlace.map((imgPlace) => (
          // eslint-disable-next-line no-plusplus
          <ItemImage key={key++} urlImg={imgPlace.urlImg} />
        ))}
      </GridImages>
      <DescriptionHosting
        location={descriptionPlace.location}
        host={descriptionPlace.host}
        guests={descriptionPlace.guests}
        rooms={descriptionPlace.rooms}
        bed={descriptionPlace.bed}
        bathroom={descriptionPlace.bathroom}
        photoHost={descriptionPlace.photoHost}
        description={descriptionPlace.description}
        dataPlace={dataPlace}
      >
        {benefits.map((benefit) => (
          <ItemBenefit
            key={benefit.title}
            photoBenefit={benefit.photoBenefit}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </DescriptionHosting>
      <Perks />
      <PlacesDetailsMap />
      <HouseRules />
      <HostDetails
        host={hostDetails.host}
        id={hostDetails.id}
        photoHost={hostDetails.photoHost}
        registerDate={hostDetails.registerDate}
        ratings={hostDetails.ratings}
        hostBio={hostDetails.hostBio}
        languages={hostDetails.languages}
        responseIndex={hostDetails.responseIndex}
        responseTime={hostDetails.responseTime}
      />

      <Footer />
    </>
  );
}

export default DetailsPage;
