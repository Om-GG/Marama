/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('calendar_input').delete()
  await knex('calendar_input').insert([
    {
      id: 1,
      phase_id: 1,
      calendar_entry_name: 'Quiet time',
      calendar_entry_description: 'Block out today for resting',
      calendar_entry_date: '12-03-23',
    },
    {
      id: 2,
      phase_id: 1,
      calendar_entry_name: 'Me time',
      calendar_entry_description: 'A personal day',
      calendar_entry_date: '16-02-23',
    },
    {
      id: 3,
      phase_id: 3,
      calendar_entry_name: 'Meeting',
      calendar_entry_description: 'First meeting with the team',
      calendar_entry_date: '19-02-23',
    },
    {
      id: 4,
      phase_id: 4,
      calendar_entry_name: 'Idea Pitch',
      calendar_entry_description: 'Pitch idea to the team',
      calendar_entry_date: '20-02-23',
    },
  ])
}
