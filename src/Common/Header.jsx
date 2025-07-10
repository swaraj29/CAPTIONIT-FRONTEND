import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../firebase';

const Header = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl p-3 sm:p-4 md:p-4 xl:p-6 sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              R
            </span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-white tracking-tight">Reely</h1>
            <p className="text-xs sm:text-xs md:text-sm text-indigo-200 -mt-1 hidden sm:block">AI Video Captions</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 lg:gap-2 xl:gap-3 items-center">
          <Link to="/" className="text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm text-sm lg:text-base">
            <span className="hidden lg:inline">🏠 </span>Home
          </Link>
          <Link to="/dashboard" className="text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm text-sm lg:text-base">
            <span className="hidden lg:inline">📊 </span>Dashboard
          </Link>
          <Link to="/newcaption" className="text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm text-sm lg:text-base">
            <span className="hidden lg:inline">➕ </span>New Caption
          </Link>
          {user && (
            <div className="flex gap-2 lg:gap-3 items-center ml-2 lg:ml-4 bg-white/10 rounded-full pl-3 pr-1 py-1 backdrop-blur-sm shadow-lg">
              <img src={user.photoURL} alt="User" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white/30 shadow-md" />
              <div className="text-right hidden lg:block">
                <span className="text-sm font-medium text-white block leading-tight">{user.displayName}</span>
                <span className="text-xs text-indigo-200 block leading-tight">{user.email}</span>
              </div>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 font-medium ml-2 text-sm lg:text-base"
              >
                <span className="hidden lg:inline">🚪 </span>Sign Out
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {user && (
            <img src={user.photoURL} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 shadow-md" />
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-600 ease-in-out transform ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 scale-y-100 mt-4' : 'max-h-0 opacity-0 scale-y-95'
        } max-w-7xl mx-auto`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 rounded-lg backdrop-blur-sm">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-200 font-medium">
            <span className="text-lg">🏠</span>
            <span>Home</span>
          </Link>
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-200 font-medium">
            <span className="text-lg">📊</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/newcaption" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-200 font-medium">
            <span className="text-lg">+</span>
            <span>New Caption</span>
          </Link>
          {user && (
            <div className="border-t border-white/20 pt-3 mt-3">
              <div className="flex items-center space-x-3 px-3 py-2 text-white">
                <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full border-2 border-white/30 shadow-md" />
                <div>
                  <span className="text-sm font-medium block leading-tight">{user.displayName}</span>
                  <span className="text-xs text-indigo-200 block leading-tight">{user.email}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-3 py-2 mt-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all duration-200 font-medium"
              >
                <span className="text-lg">🚪</span>
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
