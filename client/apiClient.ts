import request from 'superagent'

const citiesURL = 'api/v1'

const attributes = {
  atr1: 'Art',
  atr2: 'Fine Dining',
  atr3: 'Shopping',
}

export async function getCitiesData() {
  const res = await request.get(citiesURL)
  console.log(res.body)
  // return res.body
}

export async function getAllCitiesAndAttributes() {
  const res = await request.get(`${citiesURL}/quiz`)
  const cityAndAttributeArray = res.body

  const atr1array = cityAndAttributeArray.filter(
    (object) => object.attribute == attributes.atr1
  )

  console.log(attributes.atr1)
  console.log(res)
  return atr1array
}
