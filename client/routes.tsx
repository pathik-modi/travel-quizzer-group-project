import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'
import CitiesPage from './components/CitiesPage'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/quiz" element={<QuizPage />} />
    <Route path="/cities" element={<CitiesPage />} />
  </Route>
)
