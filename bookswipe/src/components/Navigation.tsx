import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, User2, MessageCircle, Library } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        <NavItem to="/" icon={<Home />} label="Home" isActive={isActive('/')} />
        <NavItem to="/discover" icon={<Book />} label="Discover" isActive={isActive('/discover')} />
        <NavItem to="/profile" icon={<User2 />} label="Profile" isActive={isActive('/profile')} />
        <NavItem to="/book-club" icon={<MessageCircle />} label="Book Club" isActive={isActive('/book-club')} />
        <NavItem to="/library" icon={<Library />} label="Library" isActive={isActive('/library')} />
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label, isActive }: { to: string; icon: React.ReactNode; label: string; isActive: boolean }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center space-y-1 group ${
        isActive ? 'text-purple-600' : 'text-gray-600'
      }`}
    >
      <div className="relative">
        {icon}
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </div>
    </Link>
  );
}