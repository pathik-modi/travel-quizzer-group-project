import { log } from 'console'
import request from 'superagent'

const citiesURL = 'api/v1'

export async function getCitiesData() {
  const res = await request.get(`${citiesURL}`)
  console.log(res.body)

  return res.body
}
