export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: string;
  bio: string;
  joinedDate: string;
  favoriteGenres: string[];
  booksLiked: number;
  booksSaved: number;
  booksRead: number;
  readingGoal: number;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
}