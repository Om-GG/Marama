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
    {
      id: 5,
      phase_name: 'Okoro',
      phase_description: 'A fine mist illumined',
    },
    {
      id: 6,
      phase_name: 'Tamatea Kai Ariki',
      phase_description:
        'Dew shines like diamonds, the soil is fertile and full of life',
    },
    {
      id: 7,
      phase_name: 'Tamatea ā Ngana',
      phase_description: '',
    },
    {
      id: 8,
      phase_name: 'Tamatea Āio',
      phase_description: '',
    },
    {
      id: 9,
      phase_name: 'Tamatea Whakapau',
      phase_description: '',
    },
    {
      id: 10,
      phase_name: 'Ariroa',
      phase_description: 'A disagreeable day, one form marking time',
    },
    {
      id: 11,
      phase_name: 'Huna',
      phase_description: '',
    },
    {
      id: 12,
      phase_name: 'Māwharu',
      phase_description: '',
    },
    {
      id: 13,
      phase_name: 'Ōhua',
      phase_description: '',
    },
    {
      id: 14,
      phase_name: 'Atua Whakahaehae',
      phase_description: '',
    },
    {
      id: 15,
      phase_name: 'Ōturu',
      phase_description: '',
    },
    {
      id: 16,
      phase_name: 'Rākaunui',
      phase_description: '',
    },
    {
      id: 17,
      phase_name: 'Rākaumatohi',
      phase_description: '',
    },
    {
      id: 18,
      phase_name: 'Takirau',
      phase_description: '',
    },
    {
      id: 19,
      phase_name: 'Oike',
      phase_description: '',
    },
    {
      id: 20,
      phase_name: 'Korekore te Whiawhia',
      phase_description: '',
    },
    {
      id: 21,
      phase_name: 'Korekore te Rawea',
      phase_description: '',
    },
    {
      id: 22,
      phase_name: 'Korekore te Piri Ki Tangaroa',
      phase_description: '',
    },
    {
      id: 23,
      phase_name: 'Tangaroa ā Mua',
      phase_description: '',
    },
    {
      id: 24,
      phase_name: 'Tangaroa ā Roto',
      phase_description: '',
    },
    {
      id: 25,
      phase_name: 'Tangaroa Whakapau',
      phase_description: '',
    },
    {
      id: 26,
      phase_name: 'Tangaroa ā Kiokio',
      phase_description: '',
    },
    {
      id: 27,
      phase_name: 'Ōtāne',
      phase_description: '',
    },
    {
      id: 28,
      phase_name: 'Ōrongonui',
      phase_description: '',
    },
    {
      id: 29,
      phase_name: 'Mauri',
      phase_description: '',
    },
    {
      id: 30,
      phase_name: 'Mutuwhenua',
      phase_description:
        'The moon is diminished and the night is total darkness',
    },
  ])
}
