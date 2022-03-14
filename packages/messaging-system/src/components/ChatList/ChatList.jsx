import React, { useState } from 'react';
import profileImage from '../../assets/profile-image.png';

import ChatItem from './ChatItem';

import './ChatList.css';

const chats = [
    {
        id: 1,
        name: 'Laura Restrepo',
        message: 'Hola. Cómo te pued...',
        image: profileImage,
        notifications: 0,
    },
    {
        id: 2,
        name: 'Booking System',
        message: 'Novedad de Booking...',
        image: null,
        notifications: 1,
    },
]

export default function ChatList(props) {
    const [selected, setSelected] = useState(1);

    const handleSelect = (id) => {
      setSelected(id);
    }

    return(
        <div>
          <h3 className="list-title">Mensajes</h3>
          <div className="chat-list">
            {chats.map((chat) => (
              <ChatItem
                onSelect={handleSelect}
                selected={selected === chat.id} 
                key={chat.id} 
                chat={chat} />
            ))}
          </div>
        </div>
    );
}