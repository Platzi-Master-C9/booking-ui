import React from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'
import Link from 'next/link'
import { FavoriteCard } from '../favoriteCard/favoriteItemCard';
import { useRouter } from "next/router";


const ROUTE_FAVORITE_ID = "favorite/[id]";
const favorites = [
  {id: '1', cardPhoto: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg', cardTitle: 'Lujosa suite en ciudad bolivar'},
  {id: '2', cardPhoto: 'https://directorioicc.gov.co/sites/default/files/espacio-audiovisual-barrio-los-laches/481_barrio_los_laches036.jpg', cardTitle: 'suite en los laches'},
  {id: '3', cardPhoto: 'https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg', cardTitle: 'Lujosa suite en ciudad bolivar'},
  {id: '4', cardPhoto: 'https://directorioicc.gov.co/sites/default/files/espacio-audiovisual-barrio-los-laches/481_barrio_los_laches036.jpg', cardTitle: 'suite en los laches'},
]

export const FavoritesLayout = () => {
  const router = useRouter();

  const navigate = (id, event) => {
    event.stopPropagation() 
    router.push({
      pathname: ROUTE_FAVORITE_ID,
      query: { id }
    });
  }

  return (
    <div className="container"> 
      <Header />
      <h2 className='title'>Mis favoritos</h2>
      <div className="favorite-grid">
        {favorites.map(favorite =>(
            <a onClick={(event) => navigate(favorite.id, event)}>
            <FavoriteCard key={favorite.id} cardPhoto={favorite.cardPhoto} cardTitle={favorite.cardTitle}/>
            </a>
        )) }
      </div>
    <Footer />
    </div>

  );
};