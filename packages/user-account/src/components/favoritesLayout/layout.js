import React from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'     
import { FavoriteCard } from '../favoriteCard/favoriteItemCard';
import { useRouter } from "next/router";
import Link from 'next/link'

const ROUTE_FAVORITE_ID = "favorites/[id]";
const favorite1 = [
  {
    title: 'favorito uno',
    photo: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg',
    description: 'este es el favorito numero uno',
    price: '2',
  }
]
const favorites = [
  {
    id: '1',
    cardPhoto: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg', 
    cardTitle: 'Lujosa suite en ciudad bolivar',
    favorites: [favorite1]
  },
  {
    id: '2',
    cardPhoto: 'https://directorioicc.gov.co/sites/default/files/espacio-audiovisual-barrio-los-laches/481_barrio_los_laches036.jpg', 
    cardTitle: 'suite en los laches'},
  {
    id: '3', 
    cardPhoto: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg', 
    cardTitle: 'Lujosa suite en ciudad bolivar'},
  {
    id: '4', 
    cardPhoto: 'https://directorioicc.gov.co/sites/default/files/espacio-audiovisual-barrio-los-laches/481_barrio_los_laches036.jpg', 
    cardTitle: 'suite en los laches'
  },
]

export const FavoritesLayout = () => {
  const router = useRouter();
  const navigate = (id, event) => {
    event.stopPropagation();
  }
  return (
    <div>
      <Header />
      <h2 className='title'>Mis favoritos</h2>
      <div className="container">
        <div className='body-container'>
          <div className="favorite-grid">
            {favorites.map(favorite =>(
              <Link href={{
                pathname: ROUTE_FAVORITE_ID,
                query: {
                  id: favorite.id,
                  title: favorite.cardTitle,
                  photoUrl: favorite.cardPhoto,
                  favorites: favorite.favorites,
                }
              }}>
                <a onClick={(event) => navigate(favorite.id, event)}>
                  <FavoriteCard key={favorite.id} cardPhoto={favorite.cardPhoto} cardTitle={favorite.cardTitle}/>
                </a>
              </Link>
                      )) }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};