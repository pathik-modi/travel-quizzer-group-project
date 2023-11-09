import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function HomePage() {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function updateGreeting() {
      try {
        const greeting = await getGreeting()
        setGreeting(greeting)
        setIsError(false)
      } catch (err) {
        setIsError(true)
      }
    }

    updateGreeting()
  }, [count])

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

        {/* <div>
          <h2>Countires</h2>
          <p>Explore Route</p>
          <Link to="/frogs/xavier">Countries</Link>
        </div> */}
      </div>
      {/* 
      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>
        <Link to="/frogs/xavier">Is there a frog named Kevin?</Link>
      </p> */}
    </>
  )
}

export default HomePage
