import React, { useState, useMemo } from 'react';
import SubjectCard from './SubjectCard';
import { Subject } from '../types';
import { FolderSearch, X } from 'lucide-react';

interface DashboardProps {
  subjects: Subject[];
  onSubjectClick: (subjectId: string) => void;
}

export default function Dashboard({ subjects, onSubjectClick }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return subjects;
    
    const query = searchQuery.toLowerCase().trim();
    return subjects.filter(subject => 
      subject.name.toLowerCase().includes(query) ||
      subject.subjectCode.toLowerCase().includes(query) ||
      subject.description.toLowerCase().includes(query)
    );
  }, [subjects, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center py-8 animate-bounce-in">
        <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Welcome to StudyShare
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Browse and download resources organized by subject. 
          Find the study materials you need for your courses.
        </p>
        <div className="mt-6 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 text-sm">
            ✨ Discover knowledge, one resource at a time
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
              <FolderSearch className="h-5 w-5 text-white/60 group-focus-within:text-blue-400 transition-colors duration-300" strokeWidth={2} />
            </div>
            <input
              type="text"
              placeholder="Search by subject name, code (e.g., 9CC56), or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors duration-300 z-10"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            )}
          </div>
          <div className="mt-3 text-center h-6">
            {searchQuery && (
              <span className="text-white/60 text-sm">
                Found {filteredSubjects.length} subject{filteredSubjects.length !== 1 ? 's' : ''}
                {filteredSubjects.length === 0 && ' - No matches found'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {searchQuery ? 'Search Results' : 'Browse by Subject'}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-white/60 text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            {filteredSubjects.length} subject{filteredSubjects.length !== 1 ? 's' : ''} available
          </div>
        </div>
        
        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((subject, index) => (
              <div
                key={subject.id}
                className="animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <SubjectCard
                  subject={subject}
                  onClick={() => onSubjectClick(subject.id)}
                />
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
              <FolderSearch className="h-12 w-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No subjects found</h3>
              <p className="text-white/60 text-sm mb-4">
                No subjects match your search for "{searchQuery}"
              </p>
              <button
                onClick={clearSearch}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
              >
                Clear Search
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}