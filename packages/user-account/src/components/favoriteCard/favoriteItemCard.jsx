import React from "react";
import "./assets/styles/favoriteCard.css";
import "../DeleteItem/deleteFavoriteList"
import DeleteCardItem from "../DeleteItem/deleteFavoriteList";

function FavoriteCard({favoriteList, deleteCard}) {
  function onDeleteFavoriteCard(){
    deleteCard();
  }

  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous"
    referrerPolicy="no-referrer" />
        <div className="favorite-card">
          <img className="favorite-card-photo" src={favoriteList.favoriteListImg} alt="Imagen de propiedad"></img>
          <div className="favorite-card-content">
            <h2 className="favorite-card-title">{favoriteList.favoriteListName}</h2>
            <div className="trash-item">
              <DeleteCardItem
               onDeleteFavoriteCard = {onDeleteFavoriteCard}
               id = {favoriteList.id}
               listName = {favoriteList.favoriteListName}
              />
            </div>
          </div>
        </div>
</>
  );
}

export { FavoriteCard };