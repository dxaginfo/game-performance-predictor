import React from 'react'

interface HeaderProps {
  activeTab: 'player' | 'team' | 'matchup'
  setActiveTab: (tab: 'player' | 'team' | 'matchup') => void
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <svg 
              className="w-8 h-8 mr-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" 
                fill="currentColor"
              />
              <path 
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" 
                fill="currentColor"
              />
            </svg>
            <h1 className="text-xl font-bold">Game Performance Predictor</h1>
          </div>
          
          <nav>
            <ul className="flex space-x-1">
              <li>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'player' 
                      ? 'bg-white text-primary' 
                      : 'text-white/90 hover:bg-primary-700 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('player')}
                >
                  Player Prediction
                </button>
              </li>
              <li>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'team' 
                      ? 'bg-white text-primary' 
                      : 'text-white/90 hover:bg-primary-700 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('team')}
                >
                  Team Prediction
                </button>
              </li>
              <li>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'matchup' 
                      ? 'bg-white text-primary' 
                      : 'text-white/90 hover:bg-primary-700 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('matchup')}
                >
                  Matchup Analysis
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header