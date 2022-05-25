import React from 'react';
import './UserChat.css';

export const UserChat = () => {
  return (
    <body>
      <main className='userChat-body'>
        <section className='userChat-head'>
          <p className='userChat-head_name'>Laura Restrepo</p>
          <p className='userChat-head_timeOfResponse'>Tiempo de respuesta: en menos de una hora</p>
        </section>
        <section className='userChat-main'>
          <div className='userChat-main_time'>28 de ene de 2022</div>
          <article className='userChat-main_client'>
            <p className='userChat-main_name'>Juanita Rodríguez</p>
            <p className='userChat-main_message'>Buenas noches Laura</p>
            <figure className='userChat-main_clientImg'>
              <img src='https://i.pinimg.com/550x/63/ce/af/63ceafe4029404ae84e31293e7662dd8.jpg'/>
            </figure>
          </article>
          <article className='userChat-main_user'>
            <figure className='userChat-main_userImg'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i-uxKAOeEK7bsFpjfXR0c0fu93EYwUuuXw&usqp=CAU'/> 
            </figure>
            <p className='userChat-main_name'>Laura Restrepo</p>
            <p className='userChat-main_message'>Hola, Cómo te puedo ayudar?</p>
          </article>
        </section>
      </main>
    </body>
  );
};