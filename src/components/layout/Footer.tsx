import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Game Performance Predictor</h3>
            <p className="text-sm text-gray-400">
              Predictive analytics for basketball performance
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-2">Resources</h4>
              <ul className="text-sm text-gray-400">
                <li className="mb-1">
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Connect</h4>
              <ul className="text-sm text-gray-400">
                <li className="mb-1">
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Game Performance Predictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer