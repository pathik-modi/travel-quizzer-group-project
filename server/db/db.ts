import db from './connection'

export function getAllCitiesAndAttributes() {
  return db('cities')
    .join('attributesOfCities', 'city_id', 'cities.id')
    .join('attributes', 'attributes.id', 'attribute_id')
    .select('city_id as cityId', 'attribute_id as attributeId')
}
