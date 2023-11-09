/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('attributesOfCities', function (table) {
    table.increments('id').primary()
    table.integer('city_id').references('cities.id')
    table.integer('attribute_id').references('attributes.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('attributesOfCities')
}
