/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('moon_phase', (table) => {
    // table.<type>(<name>)
    table.increments('id').primary()
    // ^? .primary() indicates this is the primary key (and should be unique!)
    table.string('phase_name')
    table.string('phase_description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('moon_phase')
}
