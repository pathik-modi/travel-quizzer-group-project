import express from 'express'
import { getAllCitiesAndAttributes, getAllCitiesData } from '../db/db'

const router = express.Router()

// const attributes = {
//   atrOne: 'Art',
//   atrTwo: 'Fine Dining',
//   atrThree: 'Shopping',
//   atrFour: 'Culture',
// }

router.get('/', async (req, res) => {
  try {
    const getAllCities = await getAllCitiesData()
    res.json(getAllCities)
    // res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

// router.post('/quiz', async (req, res) => {
//   try {
//     const attributes = req.body

//     res.sendStatus(201)
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(error)
//       res.status(500).json({ error: 'woopsie server error' })
//     }
//   }
// })

router.get('/quiz', async (req, res) => {
  try {
    const getAll = await getAllCitiesAndAttributes()

    // const atr1array = getAll.filter((object) => {
    //   return object.attribute === attributes.atrOne
    // })
    // const atr2array = getAll.filter((object) => {
    //   return object.attribute === attributes.atrTwo
    // })
    // const atr3array = getAll.filter((object) => {
    //   return object.attribute === attributes.atrThree
    // })
    // const atr4array = getAll.filter((object) => {
    //   return object.attribute === attributes.atrFour
    // })

    // const getAllCitiesAndAttributesArray = atr1array.concat(
    //   atr2array,
    //   atr3array,
    //   atr4array
    // )
    // const citiesArray = getAllCitiesAndAttributesArray.map((ob) => ob.city)

    // const cityCounts = citiesArray.reduce(
    //   (count, item) => ((count[item] = count[item] + 1 || 1), count),
    //   {}
    // )

    // console.log(cityCounts)

    // const cityCountsArray = Object.entries(cityCounts)

    // const sortedArray = cityCountsArray
    //   .map((obj) => {
    //     return { name: obj[0], count: obj[1] }
    //   })
    //   .sort((a, b) => a.count - b.count)
    //   .reverse()

    // console.log(sortedArray)

    // sortedArray.splice(3)

    // const topThreeCities = sortedArray.map((obj) => obj.name)

    // console.log(attributes.atr1)
    res.json(getAll)

    // res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

export default router
