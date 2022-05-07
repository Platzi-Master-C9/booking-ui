import React, {useState} from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'
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
  const [cardList, setCardList] = useState(favorites);
  const router = useRouter();

  const navigate = (id, event) => {
    event.stopPropagation() 
    router.push({
      pathname: ROUTE_FAVORITE_ID,
      query: { id }
    });
  }

  function deleteCard (id) {
    const newCardList = cardList.filter((card)=>{
      return card.id !== id;
    });
    setCardList(newCardList);
  }

  return (
    <div>
      <Header />
      <h2 className='title'>Mis favoritos</h2>
      <div className="container">
        <div className='body-container'>
          <div className="favorite-grid">
            {cardList.map(favorite =>(
              <a onClick={(event) => navigate(favorite.id, event)}>
                <FavoriteCard key={favorite.id} cardPhoto={favorite.cardPhoto} cardTitle={favorite.cardTitle}
                cardId={favorite.id}
                deleteCard={deleteCard}
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