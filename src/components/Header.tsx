import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 animate-slide-up">
            <div className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="relative">
                <h1 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                  StudyShare
                </h1>
                <p className="text-xs text-white/70">Resource Hub</p>
                <Sparkles className="absolute -top-1 -right-6 h-3 w-3 text-yellow-400 animate-pulse opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}