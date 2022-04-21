import React from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'
import Link from 'next/link'
import { FavoriteCard } from '../favoriteCard/favoriteItemCard';

const ROUTE_POST_ID = "favorite/[id]";
const  goToFavorite = () => {}
const favorites = [
  {id: '1', cardPhoto: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg', cardTitle: 'Lujosa suite en ciudad bolivar'},
  {id: '2', cardPhoto: 'https://directorioicc.gov.co/sites/default/files/espacio-audiovisual-barrio-los-laches/481_barrio_los_laches036.jpg', cardTitle: 'suite en los laches'},
  {id: '3', cardPhoto: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg', cardTitle: 'Lujosa suite en ciudad bolivar'},
  {id: '4', cardPhoto: 'https://directorioicc.gov.co/sites/default/files/espacio-audiovisual-barrio-los-laches/481_barrio_los_laches036.jpg', cardTitle: 'suite en los laches'},
]

export const FavoritesView = () => {
  return (
    <div className="container"> 
      <Header />
      <h2 className='title'>Mis favoritos</h2>
      <div className="favorite-grid">
        {favorites.map(favorite =>(
          <Link href={{
            pathname: ROUTE_POST_ID,
            query: { id: favorite.id }
          }}>
            <a onClick={goToFavorite}>
            <FavoriteCard key={favorite.id} cardPhoto={favorite.cardPhoto} cardTitle={favorite.cardTitle}/>
            </a>
          </Link>
        )) }
      </div>
    <Footer />
    </div>

  );
};