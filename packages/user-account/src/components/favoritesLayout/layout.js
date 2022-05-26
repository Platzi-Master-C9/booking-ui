import React from 'react';
import { useEffect, useState } from "react";
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'     
import { FavoriteCard } from '../favoriteCard/favoriteItemCard';
import { useRouter } from "next/router";
import Link from 'next/link'

const ROUTE_FAVORITE_ID = "favorites/[id]";

export const FavoritesLayout = () => {
  const router = useRouter();
  const navigate = (id, event) => {
    event.stopPropagation();
  }

  const [favorites, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://demo2545346.mockable.io/');
      const json = await response.json();
      setData(json.favorites);
    };
    fetchData();
  }, [setData]);
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
                  title: favorite.listTitle,
                  photoUrl: favorite.cardPhoto,
                  favorites: favorite.favorites,
                }
              }}>
                <a onClick={(event) => navigate(favorite.id, event)}>
                  <FavoriteCard key={favorite.id} cardPhoto={favorite.cardPhoto} listTitle={favorite.listTitle}/>
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