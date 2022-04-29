import React from "react";
import "../../assets/styles/favoriteViewCard.css";

const favoriteCard = {"cardTitle":"Lala", "cardPhoto":"https://cdn2.infocasas.com.uy/repo/img/558354207cc43558354207ccbb.jpg.th810.jpg"}

function FavoriteCard(cardPhoto, cardTitle) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous"
    referrerpolicy="no-referrer" />
      </head>
      <div className="favorite-card">
        <a href="#">
          <img className="favorite-card-photo" src={favoriteCard.cardPhoto}></img>
          <div className="favorite-card-content">
            <h2 className="favorite-card-title">{favoriteCard.cardTitle}</h2>
            <i className="fa-solid fa-trash" id="delete-button"></i>
          </div>
        </a>
      </div>
    </html>

  );
}

export { FavoriteCard };