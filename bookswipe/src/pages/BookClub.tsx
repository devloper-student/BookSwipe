import React, { useState } from 'react';
import { ChatMessage } from '../types';

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Alex Chen',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80',
    content: "Has anyone read 'Dune'? The world-building is incredible!",
    timestamp: '2 minutes ago'
  },
  {
    id: '2',
    userId: '2',
    userName: 'Maria Garcia',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80',
    content: "I just finished 'The Alchemist'. Such a life-changing book!",
    timestamp: '5 minutes ago'
  }
];

export default function BookClub() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [activeGenre, setActiveGenre] = useState('Science Fiction');

  const genres = ['Science Fiction', 'Philosophy', 'Classic Literature'];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: String(Date.now()),
      userId: '3',
      userName: 'You',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80',
      content: newMessage,
      timestamp: 'Just now'
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Book Club Chat</h1>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">24 online</span>
          </div>
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`px-4 py-2 rounded-full text-sm ${
                activeGenre === genre
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-600'
              }`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex space-x-3">
                <img
                  src={message.userAvatar}
                  alt={message.userName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{message.userName}</span>
                    <span className="text-sm text-gray-500">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}