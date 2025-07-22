import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ResourceCard from './ResourceCard';
import { Subject, Resource } from '../types';

interface SubjectViewProps {
  subject: Subject | undefined;
  resources: Resource[];
  onBack: () => void;
}

export default function SubjectView({ subject, resources, onBack }: SubjectViewProps) {
  if (!subject) return null;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-6 mb-8 animate-slide-up">
        <button
          onClick={onBack}
          className="group p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {subject.name}
          </h1>
          <p className="text-white/70 text-lg">{subject.description}</p>
          <div className="mt-2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center space-x-4">
          <div className="text-white/60 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            {resources.length} resource{resources.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      {resources.length > 0 ? (
        <div className="animate-slide-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ animationDelay: '0.3s' }}>
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 animate-bounce-in">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <ArrowLeft className="h-12 w-12 text-white/40" />
          </div>
          <div className="text-white/40 text-xl mb-3">No resources found</div>
          <div className="text-white/60 text-sm max-w-md mx-auto">
            Be the first to upload a resource for {subject.name}! Check back later for new content.
          </div>
        </div>
      )}
    </div>
  );
}