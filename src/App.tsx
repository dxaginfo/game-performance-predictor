import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PlayerPrediction from './components/predictions/PlayerPrediction'
import TeamPrediction from './components/predictions/TeamPrediction'
import MatchupAnalysis from './components/analysis/MatchupAnalysis'
import { useAppContext } from './context/AppContext'

function App() {
  const [activeTab, setActiveTab] = useState<'player' | 'team' | 'matchup'>('player')
  const { isLoading } = useAppContext()

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {activeTab === 'player' && <PlayerPrediction />}
            {activeTab === 'team' && <TeamPrediction />}
            {activeTab === 'matchup' && <MatchupAnalysis />}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default App