import React from 'react'

interface FactorsListProps {
  title: string
  factors: string[]
}

const FactorsList: React.FC<FactorsListProps> = ({ title, factors }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="text-md font-semibold mb-3">{title}</h4>
      
      <ul className="space-y-2">
        {factors.map((factor, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-50 text-primary-600 text-xs mr-2 mt-0.5">
              {index + 1}
            </span>
            <span className="text-gray-700">{factor}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FactorsList