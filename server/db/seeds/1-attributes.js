/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('attributes').insert([
    { attribute: 'Art' },
    { attribute: 'Beaches' },
    { attribute: 'Romantic' },
    { attribute: 'Shopping' },
    { attribute: 'Adventure' },
    { attribute: 'Culture' },
    { attribute: 'Nature' },
    { attribute: 'Gambling' },
    { attribute: 'Fine Dining' },
    { attribute: 'Wine Tasting' },
    { attribute: 'Luxury' },
    { attribute: 'Budget Friendly' },
  ])
}
