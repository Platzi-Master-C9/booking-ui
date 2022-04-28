import React from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'
import Link from 'next/link'
import { FavoriteCard } from '../favoriteCard/favoriteItemCard';
import { useRouter } from "next/router";


const ROUTE_FAVORITE_ID = "favorite/[id]";
const favorites = [
  {id: '1', cardPhoto: 'https://shorturl.ae/RqAB4', cardTitle: 'Lujosa suite en Londres'},
  {id: '2', cardPhoto: 'https://shorturl.ae/fwbyC', cardTitle: 'Suite en Dubai'},
  {id: '3', cardPhoto: 'https://shorturl.ae/RqAB4', cardTitle: 'Lujosa suite en Londres'},
  {id: '4', cardPhoto: 'https://shorturl.ae/fwbyC', cardTitle: 'Suite en Dubai'},
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
    <div>
      <Header />
      <h2 className='title'>Mis favoritos</h2>
      <div className="container">
        <div className='body-container'>
          <div className="favorite-grid">
            {favorites.map(favorite =>(
              <a onClick={(event) => navigate(favorite.id, event)}>
                <FavoriteCard key={favorite.id} cardPhoto={favorite.cardPhoto} cardTitle={favorite.cardTitle}/>
              </a>
            )) }
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}; 