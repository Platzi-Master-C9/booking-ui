import React from 'react';
import "./assets/styles/style.css";
import Footer from '../footer';
import Header from '../header'
import DeleteCardItem from "../DeleteItem/deleteCard";

export const FavoritesView = () => {
  return (
    <div className="container"> 
      <Header />
      <div className="favorite-grid">
        <div className="favorite-card">
          <img className="favorite-card-photo" src="https://cdn.getyourguide.com/img/location/5bb111f7cfca4.jpeg/88.jpg" alt=""></img>
          <div className="trash_item">
        <p>Vacaciones con mi familia</p>
        <DeleteCardItem />
      </div>
        </div>
        <div className="favorite-card">
          <img className="favorite-card-photo" src="https://img-co-1.trovit.com/q1OI16cgGE/q1OI16cgGE.1_12.jpg" alt=""></img>
          <div className="favorite-card-content">
            <h2 className="favorite-card-title">Lujosa suite en ciudad bolivar</h2>
            <i className="fa-solid fa-trash" id="delete-"></i>
          </div>
        </div>
        <div className="favorite-card">
          <img className="favorite-card-photo" src="https://img-co-1.trovit.com/q1OI16cgGE/q1OI16cgGE.1_12.jpg" alt=""></img>
          <div className="favorite-card-content">
            <h2 className="favorite-card-title">Lujosa suite en ciudad bolivar</h2>
            <i className="fa-solid fa-trash" id="delete-"></i>
          </div>
        </div>
        <div className="favorite-card">
          <img className="favorite-card-photo" src="https://img-co-1.trovit.com/q1OI16cgGE/q1OI16cgGE.1_12.jpg" alt=""></img>
          <div className="favorite-card-content">
            <h2 className="favorite-card-title">Lujosa suite en ciudad bolivar</h2>
            <i className="fa-solid fa-trash" id="delete-"></i>
          </div>
        </div>
      </div>
    <Footer />
    </div>

  );
};