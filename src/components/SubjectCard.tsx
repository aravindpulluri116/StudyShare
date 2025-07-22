import React, { useState } from 'react';
import {
  Cpu,
  Database,
  LineChart,
  Microscope,
  FileText,
  DollarSign,
  Network,
  BarChart3,
  Code,
  Calculator,
  Atom,
  Binary,
  Zap,
  Beaker,
  Ruler,
  Infinity,
  BookText
} from 'lucide-react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

const iconMap = {
  Cpu,
  Database,
  LineChart,
  Microscope,
  FileText,
  DollarSign,
  Network,
  BarChart3,
  Code,
  Calculator,
  Atom,
  Binary,
  Zap,
  Beaker,
  Ruler,
  Infinity,
  BookText
};

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[subject.icon as keyof typeof iconMap];

  if (!IconComponent) {
    console.warn(`Icon ${subject.icon} not found`);
    return null;
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 shimmer-effect relative overflow-hidden h-80"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className={`absolute w-2 h-2 bg-white/20 rounded-full transition-all duration-1000 ${isHovered ? 'animate-float' : ''}`} style={{ top: '20%', left: '80%', animationDelay: '0s' }}></div>
        <div className={`absolute w-1 h-1 bg-white/30 rounded-full transition-all duration-1000 ${isHovered ? 'animate-float' : ''}`} style={{ top: '60%', left: '10%', animationDelay: '0.5s' }}></div>
        <div className={`absolute w-1.5 h-1.5 bg-white/25 rounded-full transition-all duration-1000 ${isHovered ? 'animate-float' : ''}`} style={{ top: '80%', left: '70%', animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-4 bg-gradient-to-r ${subject.color} rounded-xl group-hover:shadow-lg transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110`}>
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div className="text-right transform group-hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
              {subject.resourceCount}
            </div>
            <div className="text-xs text-white/60">resources</div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300 line-clamp-2">
            {subject.name}
          </h3>
          
          <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300 line-clamp-3 flex-1">
            {subject.description}
          </p>
          
          <div className="text-white/50 text-sm mb-4 group-hover:text-white/70 transition-colors duration-300">
            Subject Code: {subject.subjectCode}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300 mt-auto">
          <span className="text-xs text-white/50 font-medium group-hover:text-blue-300 transition-colors duration-300">
            Click to explore →
          </span>
          <div className={`w-8 h-0.5 bg-gradient-to-r ${subject.color} rounded-full transform origin-left transition-all duration-500 ${isHovered ? 'scale-x-150' : 'scale-x-100'}`}></div>
        </div>
      </div>
    </div>
  );
}