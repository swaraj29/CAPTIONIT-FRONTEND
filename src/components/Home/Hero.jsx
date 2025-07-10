import React from 'react';
import { signInWithGoogle } from '../../firebase';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
      {/* Main Content */}
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto relative z-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">R</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text-shimmer">
            Reely
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transform your videos with <span className="text-pink-300">AI-powered captions</span> in seconds. Make content accessible, engaging, and beautiful.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: '🎬',
              title: 'AI-Powered',
              desc: 'Advanced speech recognition technology',
            },
            {
              icon: '⚡',
              title: 'Lightning Fast',
              desc: 'Caption your videos in seconds',
            },
            {
              icon: '🎨',
              title: 'Customizable',
              desc: 'Style your captions perfectly',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-indigo-200">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-12">
          <button
            onClick={signInWithGoogle}
            className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-10 bg-white rounded-2xl blur-sm"></div>
            <div className="relative z-10 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Sign in with Google</span>
            </div>
          </button>
          <p className="text-indigo-300 text-sm mt-3">No credit card needed to get started</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <h4 className="text-3xl font-bold">1M+</h4>
            <p className="text-sm text-indigo-300">Videos Captioned</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold">50K+</h4>
            <p className="text-sm text-indigo-300">Happy Users</p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <h4 className="text-3xl font-bold">99%</h4>
            <p className="text-sm text-indigo-300">Accuracy Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
