/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('journal_input', (table) => {
    // table.<type>(<name>)
    table.increments('id').primary()
    // ^? .primary() indicates this is the primary key (and should be unique!)
    table.integer('phase_id').references('moon_phase.id')
    table.string('journal_entry_title')
    table.string('journal_entry_description')
    table.dateTime('journal_entry_date')
    table.string('journal_entry_input')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('journal_input')
}
