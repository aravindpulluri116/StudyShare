import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SubjectView from './components/SubjectView';
import Footer from './components/Footer';
import { subjects, resources } from './data/mockData';

type View = 'dashboard' | 'subject';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId);
  
  const filteredResources = resources.filter(r => r.subject === selectedSubjectId);

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setCurrentView('subject');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedSubjectId('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className={`transition-all duration-700 ease-in-out ${currentView === 'dashboard' ? 'animate-fade-in' : 'animate-slide-up'}`}>
          {currentView === 'dashboard' && (
            <Dashboard
              subjects={subjects}
              onSubjectClick={handleSubjectClick}
            />
          )}
          
          {currentView === 'subject' && (
            <SubjectView
              subject={selectedSubject}
              resources={filteredResources}
              onBack={handleBackToDashboard}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;