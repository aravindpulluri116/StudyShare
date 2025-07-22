import { useState } from 'react';
import { Instagram, Linkedin, ExternalLink, Heart, Code } from 'lucide-react';

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="w-full bg-white/5 backdrop-blur-sm border-t border-white/10 mt-16 relative overflow-hidden flex justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Header Section */}
          <div className="text-center animate-slide-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-blue-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Created by Aravind Pulluri
              </h3>
              <Heart className="h-5 w-5 text-red-400 animate-pulse" />
            </div>
            <p className="text-white/60 text-sm">Connect with me on social media</p>
          </div>
          
          {/* Social Links Section */}
          <div className="flex flex-col items-center w-full">
            <span className="mb-4 text-white/80 text-sm">For any updates or requests, please contact us on WhatsApp.</span>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0 w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Instagram Link */}
              <a
                href="https://instagram.com/techy.aravind"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial('instagram')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="group flex items-center space-x-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-500/25 shimmer-effect w-full sm:w-auto justify-center"
              >
                <Instagram className={`h-5 w-5 transition-transform duration-300 ${hoveredSocial === 'instagram' ? 'animate-bounce' : ''}`} />
                <span className="font-medium">Techy Aravind</span>
                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/aravind-pulluri-101291334/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial('linkedin')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="group flex items-center space-x-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25 shimmer-effect w-full sm:w-auto justify-center"
              >
                <Linkedin className={`h-5 w-5 transition-transform duration-300 ${hoveredSocial === 'linkedin' ? 'animate-bounce' : ''}`} />
                <span className="font-medium">Aravind Pulluri</span>
                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/+918886113839?text=Hi%2C%20I%20would%20like%20to%20get%20updates%20or%20request%20an%20update%20regarding%20StudyShare."
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial('whatsapp')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="group flex items-center space-x-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/25 shimmer-effect w-full sm:w-auto justify-center"
              >
                {/* WhatsApp SVG Icon */}
                <svg className={`h-5 w-5 transition-transform duration-300 ${hoveredSocial === 'whatsapp' ? 'animate-bounce' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.111 6.479 6.58 2.009 12.149 2c2.652.004 5.151 1.037 7.032 2.929a9.822 9.822 0 012.918 7.031c-.011 5.566-4.48 10.037-10.046 10.037m8.413-18.252A11.815 11.815 0 0012.146 0C5.452.011.013 5.462 0 12.153a11.822 11.822 0 001.623 6.002L.057 24l6.294-1.681a11.88 11.88 0 005.841 1.489h.005c6.691 0 12.139-5.451 12.153-12.144a11.821 11.821 0 00-3.464-8.386"/>
                </svg>
                <span className="font-medium">WhatsApp</span>
                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
          
          {/* Footer Section */}
          <div className="text-center pt-6 border-t border-white/10 w-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/40 text-sm flex items-center justify-center space-x-2">
              <span>© 2025 StudyShare. Built with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for students.</span>
            </p>
            <div className="mt-2 flex justify-center">
              <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}