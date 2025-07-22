import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const popularBooks = [
  {
    id: '1',
    title: 'Sky Castle',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Divine Rivals',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'One Day',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Gilmore Girls',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-20">
        <div className="relative">
          {/* Hero Section */}
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-handwriting text-2xl mb-4 block"
            >
              WELCOME HOME
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-serif font-bold mb-6"
            >
              Bookworms and binge-watchers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 mb-8"
            >
              Join a community of good people to discuss great stories on BookSwipe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/discover"
                className="inline-block bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Decorative Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Reader with books"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Popular Books Slider */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4 overflow-x-auto pb-4"
          >
            {popularBooks.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 w-48 group cursor-pointer"
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold">{book.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}