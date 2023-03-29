/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('moon_phase').delete()
  await knex('moon_phase').insert([
    {
      id: 1,
      phase_name: 'Whiro',
      phase_description: 'Dark and mysterious',
    },
    {
      id: 2,
      phase_name: 'Tirea',
      phase_description: 'Light comes through',
    },
    {
      id: 3,
      phase_name: 'Hoata',
      phase_description: 'Some defined shapes',
    },
    {
      id: 4,
      phase_name: 'Ouenuku',
      phase_description: 'Give shape to shadows',
    },
  ])
}
