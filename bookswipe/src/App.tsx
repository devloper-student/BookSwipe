import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import Library from './pages/Library';
import BookClub from './pages/BookClub';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/library" element={<Library />} />
          <Route path="/book-club" element={<BookClub />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}