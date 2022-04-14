import { useState, useEffect } from 'react';
import chatListService from '../services/ChatListService';

function useChatList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFunc = async () => {
    const res = await chatListService.getList();
    setChats(res);
    setLoading(false);
  }

  useEffect(() => {
    fetchFunc();
  }, []);

  return {
    chats,
    loading,
  }
}

export default useChatList;