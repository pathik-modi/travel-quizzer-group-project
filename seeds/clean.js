export async function seed(knex) {
  await knex('cities').del()
  await knex('attributes').del()
  await knex('attributesOfCities').del()
}
