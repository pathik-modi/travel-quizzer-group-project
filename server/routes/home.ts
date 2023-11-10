import express from 'express'
import { getAllCitiesAndAttributes, getAllCitiesData } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const getAll = await getAllCitiesData()
    res.json(getAll)
    //sres.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

export default router
