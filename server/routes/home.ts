import express from 'express'
import { getAllCitiesAndAttributes } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const getAll = await getAllCitiesAndAttributes()
    console.log(getAll)
    res.json(getAll)
    // res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

export default router
