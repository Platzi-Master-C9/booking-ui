import React from 'react';
import profileImage from '../../assets/profile-image.png';

import ChatItem from './ChatItem';

import './ChatList.css';

const chats = [
    {
        id: 1,
        name: 'Laura Restrepo',
        message: 'Hola. Cómo te pued...',
        image: profileImage,
        active: true,
        notifications: 0,
    },
    {
        id: 2,
        name: 'Booking System',
        message: 'Novedad de Booking...',
        image: null,
        active: false,
        notifications: 1,
    },
]

export default function ChatList(props) {
    return(
        <div>
          <h3 className="list-title">Mensajes</h3>
          <div className="chat-list">
            {chats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))}
          </div>
        </div>
    );
}