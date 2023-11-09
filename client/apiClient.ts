import request from 'superagent'

const citiesURL = 'api/v1'

export async function getCitiesData() {
  const res = await request.get(citiesURL)
  return res.body
}
