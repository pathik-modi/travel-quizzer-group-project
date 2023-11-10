import { useState, useEffect } from 'react'
import { getCitiesData } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import QuizPage from './QuizPage.tsx'

function HomePage() {
  return (
    <>
      <div className="homepageButtons">
        <div>
          <h2>Quiz</h2>
          <p>Adventurious Route</p>
          <button>
            <Link to="/quiz">Quiz Page</Link>
          </button>
        </div>

        <div>
          <h2>Cities</h2>
          <p>Explore Your Options</p>
          <button>
            <Link to="/cities">Cities Page</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage
