import express from 'express'
import { getAllCitiesAndAttributes, getAllCitiesData } from '../db/db'

const router = express.Router()

const attributes = {
  atr1: 'Art',
  atr2: 'Fine Dining',
  atr3: 'Shopping',
  atr4: 'Culture',
}

router.get('/', async (req, res) => {
  try {
    const getAllCities = await getAllCitiesData()
    res.json(getAllCities)
    // res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

router.get('/quiz', async (req, res) => {
  try {
    const getAll = await getAllCitiesAndAttributes()
    const atr1array = getAll.filter((object) => {
      return object.attribute === attributes.atr1
    })
    const atr2array = getAll.filter((object) => {
      return object.attribute === attributes.atr2
    })
    const atr3array = getAll.filter((object) => {
      return object.attribute === attributes.atr3
    })
    const atr4array = getAll.filter((object) => {
      return object.attribute === attributes.atr4
    })

    const getAllCitiesAndAttributesArray = atr1array.concat(
      atr2array,
      atr3array,
      atr4array
    )
    const citiesArray = getAllCitiesAndAttributesArray.map((ob) => ob.city)

    const cityCounts = citiesArray.reduce(
      (count, item) => ((count[item] = count[item] + 1 || 1), count),
      {}
    )

    console.log(cityCounts)

    const cityCountsArray = Object.entries(cityCounts)

    const sortedArray = cityCountsArray
      .map((obj) => {
        return { name: obj[0], count: obj[1] }
      })
      .sort((a, b) => a.count - b.count)
      .reverse()

    console.log(sortedArray)

    sortedArray.splice(3)

    const topThreeCities = sortedArray.map((obj) => obj.name)

    // console.log(attributes.atr1)
    res.json(topThreeCities)

    // res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

export default router
