import React from "react";
import { GridImages } from '../GridImages'; 
import { ItemImage } from '../ItemImage';
import { DescriptionHosting } from '../DescriptionHosting'; 
import { ItemBenefit } from '../ItemBenefit';
import { ServicesHosting } from "../ServicesHosting";
import { ItemService} from '../ItemService';

function DataHostingUI ({ imgsPlace, dataPlace, descriptionPlace, benefits, servicesImgs, servicesNames })
{
   let key = 0;

   return (
      <React.Fragment>
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
                     link = { benefit.link }
                  />   
            ))}     
         </DescriptionHosting>

         <ServicesHosting
            kitchen_url = { servicesImgs.kitchen_url } 
            garage_url = { servicesImgs.garage_url } 
            tv_url = { servicesImgs.tv_url } 
            washingMachine_url = { servicesImgs.washingMachine_url } 
            wifi_url = { servicesImgs.wifi_url } 
            pool_url = { servicesImgs.pool_url } 
            hotWater_url = { servicesImgs.hotWater_url } 
            heating_url = { servicesImgs.heating_url } 
         >
            {
               servicesNames.map(serviceName => (
                  <ItemService
                     key = { serviceName.name }
                     name = { serviceName.name }
                  />
            ))}
         </ServicesHosting> 
      </React.Fragment>
   );
}

export { DataHostingUI }