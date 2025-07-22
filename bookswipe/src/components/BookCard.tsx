import React from 'react';
import TinderCard from 'react-tinder-card';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { useBookStore } from '../store/bookStore';

interface BookCardProps {
  book: Book;
  onSwipe: (direction: string) => void;
}

export default function BookCard({ book, onSwipe }: BookCardProps) {
  const addLikedBook = useBookStore((state) => state.addLikedBook);
  const addSavedBook = useBookStore((state) => state.addSavedBook);

  const handleSwipe = (direction: string) => {
    if (direction === 'right') {
      addLikedBook(book);
    }
    onSwipe(direction);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    addSavedBook(book);
  };

  return (
    <TinderCard
      onSwipe={handleSwipe}
      preventSwipe={['up', 'down']}
      className="absolute w-full"
    >
      <div className="relative w-full h-[70vh] bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{book.title}</h2>
          <p className="text-gray-200 mb-4">by {book.author}</p>
          <p className="text-gray-300">{book.description}</p>
          <div className="flex justify-center space-x-8 mt-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 text-white p-4 rounded-full"
              onClick={() => handleSwipe('left')}
            >
              ✕
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-purple-500 text-white p-4 rounded-full"
              onClick={handleSave}
            >
              🔖
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 text-white p-4 rounded-full"
              onClick={() => handleSwipe('right')}
            >
              ♥
            </motion.button>
          </div>
        </div>
      </div>
    </TinderCard>
  );
}