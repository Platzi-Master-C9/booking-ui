import profileImage from '../assets/profile-image.png';

const chatsMock = [
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
  }
]

class ChatListService {
  getList() {
    return new Promise((resolve) => {
      setTimeout(resolve, 500, chatsMock);
    });
  }
}

const chatListService = new ChatListService();

export default chatListService;