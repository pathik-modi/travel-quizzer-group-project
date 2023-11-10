import db from './connection'

export function getAllCitiesData() {
  return db('cities').select()
}

export function getAllCitiesAndAttributes() {
  return db('cities')
    .join('attributesOfCities', 'city_id', 'cities.id')
    .join('attributes', 'attributes.id', 'attribute_id')
    .select('city', 'attribute')
}
