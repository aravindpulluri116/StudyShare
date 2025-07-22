import React, { useState } from 'react';
import { Download, Calendar, User, HardDrive, Eye, Star } from 'lucide-react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch(`/materials/${resource.fileName}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = resource.fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 shimmer-effect relative overflow-hidden animate-slide-up">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Floating star */}
      <Star className="absolute top-4 right-4 h-4 w-4 text-yellow-400/50 group-hover:text-yellow-400 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
              {resource.title}
            </h3>
            {resource.description && (
              <p className="text-white/70 text-sm mb-3 line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                {resource.description}
              </p>
            )}
          </div>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`ml-4 p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/25 ${isDownloading ? 'animate-pulse cursor-not-allowed' : 'hover:rotate-12'}`}
            title="Download resource"
          >
            <Download className={`h-5 w-5 transition-transform duration-300 ${isDownloading ? 'animate-bounce' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
            <User className="h-4 w-4 mr-2 text-blue-400" />
            <span>Uploaded by {resource.uploadedBy}</span>
          </div>
          <div className="flex items-center text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
            <Calendar className="h-4 w-4 mr-2 text-purple-400" />
            <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
            <HardDrive className="h-4 w-4 mr-2 text-green-400" />
            <span>{resource.fileSize}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <span className="text-xs text-white/50 font-medium group-hover:text-blue-300 transition-colors duration-300">
            {resource.subjectCode}
          </span>
        </div>

        {/* Progress bar for download */}
        {isDownloading && (
          <div className="mt-4 w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}