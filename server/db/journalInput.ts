//This db functions page is used to make calls to the database to get, add, update, and delete journal inputs.
//The functions are used in the journalInput router in the server/routes folder.
//The functions use connection from ./connection to connect to the database.
//The functions use the JournalInputSnakeCase interface from ../models/journalInput to type the data that is passed around in the application through the add and update functions.

// Path: server/db/journalInput.ts
// Compare this snippet from models/journalInput.ts:

import connection from './connection'
import { JournalInputSnakeCase } from '../../models/journalInput'

export function getJournalInputs(db = connection) {
  return db('journal_input')
    .select(
      'id',
      'phase_id as phaseId',
      'journal_entry_name as journalEntryName',
      'journal_entry_description as journalEntryDescription',
      'journal_entry_date as journalEntryDate',
      'journal_entry_input as journalEntryInput'
    )
    .orderBy('id')
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
