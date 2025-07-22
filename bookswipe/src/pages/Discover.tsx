import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { Book } from '../types';

const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A philosophical tale about following your dreams...',
    genre: 'Philosophy'
  },
  // Add more sample books
];

export default function Discover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState({ liked: 0, passed: 0, saved: 0 });

  const handleSwipe = (direction: string) => {
    if (direction === 'right') {
      setStats(s => ({ ...s, liked: s.liked + 1 }));
    } else if (direction === 'left') {
      setStats(s => ({ ...s, passed: s.passed + 1 }));
    }
    setCurrentIndex(i => i + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">Discover Books</h1>
        <p className="text-center text-gray-600 mb-8">Swipe right to like, left to pass</p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <span className="text-2xl font-bold text-purple-600">{stats.liked}</span>
            <p className="text-sm text-gray-600">Liked</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-600">{stats.passed}</span>
            <p className="text-sm text-gray-600">Passed</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-emerald-600">{stats.saved}</span>
            <p className="text-sm text-gray-600">Saved</p>
          </div>
        </div>

        <div className="relative h-[70vh]">
          {sampleBooks.map((book, index) => (
            index >= currentIndex && (
              <BookCard
                key={book.id}
                book={book}
                onSwipe={handleSwipe}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}