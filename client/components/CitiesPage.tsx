import { useState } from 'react'
import { getCitiesData } from '../apiClient'

export default function CitiesPage() {
  const [loadcitiesNames, setLoadCities] = useState()

  async function loadCities() {
    const body = await getCitiesData()
    setLoadCities(body)
  }
  loadCities()
  return (
    <>
      <h2>Cities Page here</h2>
      {loadcitiesNames}
    </>
  )
}
