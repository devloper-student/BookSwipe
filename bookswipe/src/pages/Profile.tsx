import React from 'react';
import { User } from '../types';

const user: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  location: 'San Francisco, CA',
  bio: 'Book enthusiast and aspiring writer. I love discovering new worlds through reading.',
  joinedDate: 'January 2024',
  favoriteGenres: ['Fiction', 'Philosophy', 'Science Fiction'],
  booksLiked: 1,
  booksSaved: 1,
  booksRead: 12,
  readingGoal: 50
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20">
      <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
      </div>

      <div className="mt-20 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
            Edit Profile
          </button>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p>{user.bio}</p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <span>📧 {user.email}</span>
            <span>📍 {user.location}</span>
            <span>📅 Joined {user.joinedDate}</span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Favorite Genres</h2>
          <div className="flex flex-wrap gap-2">
            {user.favoriteGenres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <span className="text-2xl font-bold text-purple-600">
              {user.booksLiked}
            </span>
            <p className="text-sm text-gray-600">Books Liked</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <span className="text-2xl font-bold text-purple-600">
              {user.booksSaved}
            </span>
            <p className="text-sm text-gray-600">Saved Books</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <span className="text-2xl font-bold text-purple-600">
              {user.booksRead}
            </span>
            <p className="text-sm text-gray-600">Books Read</p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-purple-600 rounded-full"
                style={{
                  width: `${(user.booksRead / user.readingGoal) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Goal: {user.readingGoal} books
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-purple-600">📚</span>
              <div>
                <p>Added "The Alchemist" to reading list</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-purple-600">💬</span>
              <div>
                <p>Joined "Science Fiction Lovers" book club</p>
                <p className="text-sm text-gray-500">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}