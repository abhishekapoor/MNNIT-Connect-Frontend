import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

function App() {
  const [currentView, setCurrentView] = useState('landing'); 
  // Options: 'landing', 'login', 'signup', 'dashboard'
  
  const [userRole, setUserRole] = useState('student'); 
  // 'student' or 'admin'

  return (
    <div>
      {currentView === 'landing' && (
        <LandingPage 
          onLoginClick={() => setCurrentView('login')}
          onSignUpClick={() => setCurrentView('signup')}
        />
      )}
      
      {currentView === 'login' && (
        <LoginPage 
          onSignUpClick={() => setCurrentView('signup')}
          onSuccess={(role) => {
            setUserRole(role);
            setCurrentView('dashboard');
          }}
        />
      )}
      
      {currentView === 'signup' && (
        <SignUpPage 
          onSignInClick={() => setCurrentView('login')}
          onSuccess={() => setCurrentView('login')}
        />
      )}

      {/* MainDashboard will be added next */}
      {currentView === 'dashboard' && (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Coming Soon!</h1>
            <p className="text-gray-600 mb-6">Main dashboard is being built...</p>
            <button
              onClick={() => setCurrentView('landing')}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;