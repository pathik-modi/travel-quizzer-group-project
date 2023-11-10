import { useEffect, useState } from 'react'
import { getCitiesData } from '../apiClient'
import { log } from 'node:console'

export default function CitiesPage() {
  const [cities, setCities] = useState([])
  useEffect(() => {
    loadCities()
  }, [])

  async function loadCities() {
    const body = await getCitiesData()
    setCities(body)
  }

  console.log(cities)

  return (
    <>
      <h2>Cities Page here</h2>
      <div></div>
    </>
  )
}
