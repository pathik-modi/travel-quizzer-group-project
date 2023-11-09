/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('attributesOfCities').del()
  await knex('attributesOfCities').insert([
    { city_id: '1', attribute_id: '3' },
    { city_id: '1', attribute_id: '1' },
    { city_id: '1', attribute_id: '4' },
    { city_id: '2', attribute_id: '4' },
    { city_id: '2', attribute_id: '3' },
    { city_id: '3', attribute_id: '4' },
  ])
}
