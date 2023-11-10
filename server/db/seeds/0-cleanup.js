/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('attributesOfCities').del()
  await knex('cities').del()
  await knex('attributes').del()
}
