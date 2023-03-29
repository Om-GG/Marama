/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('calendar_input', (table) => {
    // table.<type>(<name>)
    table.increments('id').primary()
    // ^? .primary() indicates this is the primary key (and should be unique!)
    table.integer('phase_id').references('moon_phase.id')
    table.string('calendar_entry_name')
    table.string('calendar_entry_description')
    table.dateTime('calendar_entry_date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('calendar_input')
}
