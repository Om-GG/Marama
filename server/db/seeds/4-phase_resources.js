/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('phase_resources').delete()
  await knex('phase_resources').insert([
    {
      id: 1,
      phase_id: 1,
      resource_name: 'Meditation',
      resource_description: 'Whiro Meditation',
      resource_text: './data/Resources.md',
    },
    {
      id: 2,
      phase_id: 1,
      resource_name: 'Monthly Planning',
      resource_description: 'A Maramataka Planner',
      resource_text: './data/Resources.md',
    },
    {
      id: 3,
      phase_id: 3,
      resource_name: 'Eeling',
      resource_description: 'A guide on setting up a hinaki',
      resource_text: './data/Resources.md',
    },
    {
      id: 4,
      phase_id: 4,
      resource_name: 'Kumara',
      resource_description: 'A step-by-step guide to growing kumara',
      resource_text: './data/Resources.md',
    },
  ])
}
