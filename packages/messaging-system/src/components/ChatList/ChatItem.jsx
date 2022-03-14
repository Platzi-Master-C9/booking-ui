import React from 'react'

const ChatItem = ({ chat, onSelect, selected }) => {
  
  const handleSelect = () => {
    onSelect && onSelect(chat.id);
  }

  return (
    <div onClick={handleSelect} className={`chat ${selected ? 'chat--active' : ''}`}>
      {Boolean(chat.notifications) && (
        <span className="notification-badge">1</span>
      )}
      <div className="chat__image">
        {chat.image ? (
          <img src={chat.image} alt={chat.name} />
        ) : (
          <div className="chat__default-profile">
            BS
          </div>
        )}
      </div>
      <div className="chat__details">
        <h6 className="chat__details--name">{chat.name}</h6>
        <p className="chat__details--message">{chat.message}</p>
      </div>
    </div>
  );
}

export default ChatItem