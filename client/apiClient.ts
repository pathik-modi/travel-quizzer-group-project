import request from 'superagent'

const citiesURL = '/api/v1'

export async function getCitiesData() {
  const res = await request.get(`${citiesURL}`)
  return res.body
}

export async function addUserInput(userInput) {
  const res = await request.get(`${citiesURL}/quiz`)
  const getAll = res.body
  const attributes = userInput

  const atr1array = getAll.filter((object) => {
    return object.attribute === attributes.atrOne
  })
  const atr2array = getAll.filter((object) => {
    return object.attribute === attributes.atrTwo
  })
  const atr3array = getAll.filter((object) => {
    return object.attribute === attributes.atrThree
  })
  const atr4array = getAll.filter((object) => {
    return object.attribute === attributes.atrFour
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

  // console.log(cityCounts)

  const cityCountsArray = Object.entries(cityCounts)

  const sortedArray = cityCountsArray
    .map((obj) => {
      return { name: obj[0], count: obj[1] }
    })
    .sort((a, b) => a.count - b.count)
    .reverse()

  // console.log(sortedArray)

  sortedArray.splice(3)

  const topThreeCities = sortedArray.map((obj) => obj.name)
  return topThreeCities
}
