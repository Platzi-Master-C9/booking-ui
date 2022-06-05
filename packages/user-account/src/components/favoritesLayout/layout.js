import React, {useState, useEffect} from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'
import { FavoriteCard } from '../favoriteCard/favoriteItemCard';
import { useRouter } from "next/router";
import axios from 'axios';


const ROUTE_FAVORITE_ID = "favorite/[id]";

export const FavoritesLayout = () => {
  const [cardList, setCardList] = useState([]);
  const router = useRouter();

  useEffect (()=>{
    getFavoriteList();
  }, [])

  function getFavoriteList () {
    axios.get("https://628d8d5ba339dfef879c4b9f.mockapi.io/favorites").then((response)=>{
      setCardList(response.data);
      }).catch((error)=>{
        console.error(error);
      })
  }

  const navigate = (id, event) => {
    event.stopPropagation() 
    router.push({
      pathname: ROUTE_FAVORITE_ID,
      query: { id }
    });
  }

  function deleteCard () {
    getFavoriteList();
  }

  return (
    <div>
      <Header />
      <h2 className='title'>Mis favoritos</h2>
      <div className="container">
        <div className='body-container'>
          <div className="favorite-grid">
            {cardList.map(favorite =>(
              <a key={favorite.id} onClick={(event) => navigate(favorite.id, event)}>
                <FavoriteCard 
                deleteCard={deleteCard}
                favoriteList={favorite}
                />
              </a>
            )) }
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}; 