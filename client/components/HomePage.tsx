import { useState, useEffect } from 'react'
import { getCitiesData } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function HomePage() {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  return (
    <>
      <div className="homepageButtons">
        <div>
          <h2>Quiz</h2>
          <p>Adventurious Route</p>
          <p></p>
          <button>
            <Link to="/frogs/xavier">Quiz Page</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage
