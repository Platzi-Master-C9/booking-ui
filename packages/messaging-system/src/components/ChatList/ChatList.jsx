import React, { useState } from 'react';
import { useChatList } from '../../hooks';
import ChatItem from './ChatItem';

import './ChatList.css';


export default function ChatList(props) {
    const [selected, setSelected] = useState(1);
    const { chats, loading } = useChatList();

    const handleSelect = (id) => {
      setSelected(id);
    }

    if (loading) {
      return (
        <div>
          <span>Cargando chats...</span>
        </div>
      )
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