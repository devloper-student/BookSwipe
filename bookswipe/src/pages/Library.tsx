import React from 'react';
import { useBookStore } from '../store/bookStore';

export default function Library() {
  const savedBooks = useBookStore((state) => state.savedBooks);
  const removeSavedBook = useBookStore((state) => state.removeSavedBook);

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Library</h1>
          <span className="text-gray-600">{savedBooks.length} books saved</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedBooks.map((book) => (
            <div key={book.id} className="relative group">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full aspect-[2/3] object-cover rounded-lg shadow-md"
              />
              <button
                onClick={() => removeSavedBook(book.id)}
                className="absolute top-2 right-2 bg-purple-100 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                🔖
              </button>
              <div className="mt-2">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                  {book.genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}