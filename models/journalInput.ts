//This models file contains the interfaces for the data that is passed around in the application between the journal_imputs table in the database and the JournalInputForm component.
//The interfaces are used to type the data that is passed around in the application.

// Path: models/journalInput.ts
// Compare this snippet from server/db/journalInput.ts:

export interface JournalInput {
  id: number
  phaseId: number
  journalEntryTitle: string
  journalEntryDescription: string
  journalEntryDate: string
  journalEntryInput: string
}

export interface JournalInputSnakeCase {
  id?: number
  phase_id: number
  journal_entry_title: string
  journal_entry_description: string
  journal_entry_date: string
  journal_entry_input: string
}

export interface NewJournalInput {
  phaseId: number
  journalEntryTitle: string
  journalEntryDescription: string
  journalEntryDate: string
  journalEntryInput: string
}

export interface JournalQueryParams {
  date?: string
  moonPhase?: string
  inputTitle?: string
  keywords?: string
  description?: string
}
