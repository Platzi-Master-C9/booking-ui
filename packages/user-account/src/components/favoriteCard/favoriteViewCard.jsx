import React from "react";
import "./assets/styles/favoriteCard.css";
import "../DeleteItem/deleteCard"
import DeleteCardItem from "../DeleteItem/deleteCard";

const favoriteCard = {"cardPhoto":"https://cdn2.infocasas.com.uy/repo/img/55835182a525b55835182a52d1.jpg.th810.jpg", "cardTitle":"holi"}

function FavoriteCard(cardPhoto, cardTitle) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous"
    referrerpolicy="no-referrer" />
      </head>
      <div className="favorite-card">
        <img className="favorite-card-photo" src={favoriteCard.cardPhoto}></img>
        <div className="favorite-card-content">
          <h2 className="favorite-card-title">{favoriteCard.cardTitle}</h2>
          <DeleteCardItem />
        </div>
      </div>
    </html>

  );
}

export { FavoriteCard };
