/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('journal_input').delete()
  await knex('journal_input').insert([
    {
      id: 1,
      phase_id: 1,
      journal_entry_title: 'A quiet time',
      journal_entry_description: 'I had a quiet day.',
      journal_entry_date: '12-03-23',
      journal_entry_input: './data/Input.md',
    },
    {
      id: 2,
      phase_id: 1,
      journal_entry_title: 'I am restless',
      journal_entry_description: 'I had a hard time thinking clearly',
      journal_entry_date: '16-02-23',
      journal_entry_input: './data/Input.md',
    },
    {
      id: 3,
      phase_id: 3,
      journal_entry_title: 'Set in motion',
      journal_entry_description: 'Today I had the first meeting with...',
      journal_entry_date: '19-02-23',
      journal_entry_input: './data/Input.md',
    },
    {
      id: 4,
      phase_id: 4,
      journal_entry_title: 'Nice!',
      journal_entry_description: 'Everyone has agreed on the plan',
      journal_entry_date: '20-02-23',
      journal_entry_input: './data/Input.md',
    },
  ])
}
