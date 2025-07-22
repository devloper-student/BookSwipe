import { create } from 'zustand';
import { Book } from '../types';

interface BookStore {
  likedBooks: Book[];
  savedBooks: Book[];
  addLikedBook: (book: Book) => void;
  addSavedBook: (book: Book) => void;
  removeSavedBook: (bookId: string) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  likedBooks: [],
  savedBooks: [],
  addLikedBook: (book) =>
    set((state) => ({ likedBooks: [...state.likedBooks, book] })),
  addSavedBook: (book) =>
    set((state) => ({ savedBooks: [...state.savedBooks, book] })),
  removeSavedBook: (bookId) =>
    set((state) => ({
      savedBooks: state.savedBooks.filter((book) => book.id !== bookId),
    })),
}));