/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('phase_resources', (table) => {
    // table.<type>(<name>)
    table.increments('id').primary()
    // ^? .primary() indicates this is the primary key (and should be unique!)
    table.integer('phase_id').references('moon_phase.id')
    table.string('resource_name')
    table.string('resource_description')
    table.string('resource_text')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('phase_resources')
}
