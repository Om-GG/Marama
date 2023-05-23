//This db functions page is used to make calls to the database to get, add, update, and delete journal inputs.
//The functions are used in the journalInput router in the server/routes folder.
//The functions use connection from ./connection to connect to the database.
//The functions use the JournalInputSnakeCase interface from ../models/journalInput to type the data that is passed around in the application through the add and update functions.

// Path: server/db/journalInput.ts
// Compare this snippet from models/journalInput.ts:

import connection from './connection'
import {
  JournalInputSnakeCase,
  JournalQueryParams,
} from '../../models/journalInput'

export function getJournalInputs(db = connection) {
  return db('journal_input')
    .select(
      'id',
      'phase_id as phaseId',
      'journal_entry_title as journalEntryTitle',
      'journal_entry_description as journalEntryDescription',
      'journal_entry_date as journalEntryDate',
      'journal_entry_input as journalEntryInput'
    )
    .orderBy('id')
}

//TODO: This function queries the database for journal inputs dynamically based on the search criteria by title, phaseId, keyword, description and date.

export function getJournalInputByQueryParams(
  queryParams: JournalQueryParams,
  db = connection
) {
  const date = queryParams.date
  const moonPhase = queryParams.moonPhase
  const inputTitle = queryParams.inputTitle
  const keywords = queryParams.keywords
  const description = queryParams.description
  return db('journal_input')
    .select(
      'id',
      'phase_id as phaseId',
      'journal_entry_title as journalEntryTitle',
      'journal_entry_description as journalEntryDescription',
      'journal_entry_date as journalEntryDate',
      'journal_entry_input as journalEntryInput'
    )
    .where((builder) => {
      if (Object.keys(queryParams).length > 0) {
        if (date !== undefined) {
          builder.where('journal_entry_date', date)
        }
        if (moonPhase !== undefined) {
          builder.where('phase_id', moonPhase)
        }
        if (inputTitle !== undefined) {
          builder.where('journal_entry_title', 'ilike', inputTitle)
        }
        if (description !== undefined) {
          builder.where('journal_entry_description', 'ilike', description)
        }
        if (keywords !== undefined) {
          const keywordsArray = keywords.split(',')
          builder.whereIn(
            'journal_entry_input',
            keywordsArray.map((keyword: string) => `%${keyword}%`)
          )
        }
      }
    })
}
export function addJournalInput(
  journalInput: JournalInputSnakeCase,
  db = connection
) {
  return db('journal_input').insert(journalInput)
}

export function updateJournalInput(
  newJournalInput: JournalInputSnakeCase,
  db = connection
) {
  return db('journal_input')
    .where('id', newJournalInput.id)
    .update(newJournalInput)
}

export function deleteJournalInput(id: number, db = connection) {
  return db('journal_input').where('id', id).delete()
}
