//This component displays a form that connects to the journal_input table in the database.
//It allows the user to input a journal entry and submit it to the database.
//It also allows the user to view all of their journal entries.
//It also allows the user to delete a journal entry.
//It also allows the user to edit a journal entry.
//The input fields are journalEntryTitle, journalEntryDate, journalEntryDescription, and journalEntryInput. These are diplayed as Title, Date, Description, and Entry respectively.
//The user can submit the form by clicking the Add button.

//The form is displayed in the JournalInputForm component.

//Path: client/components/JournalInputForm.tsx

// Imports necessary modules
import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import {
  addJournalInputEntry,
} from '../../actions/journalInput'
import { NewJournalInput } from '../../../models/journalInput'

interface Props {
  phaseId: number
}

// Creates the JournalInputForm component
function JournalInputForm({ phaseId }: Props) {
  const dispatch = useAppDispatch()
  const [journalEntryTitle, setJournalEntryTitle] = useState('')
  const [journalEntryDate, setJournalEntryDate] = useState('')
  const [journalEntryDescription, setJournalEntryDescription] = useState('')
  const [journalEntryInput, setJournalEntryInput] = useState('')

  // Handles the change of the journal entry title
  const handleJournalEntryTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJournalEntryTitle(e.target.value)
  }

  // Handles the change of the journal entry date
  const handleJournalEntryDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJournalEntryDate(e.target.value)
  }

  // Handles the change of the journal entry description
  const handleJournalEntryDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setJournalEntryDescription(e.target.value)
  }

  // Handles the change of the journal entry input
  const handleJournalEntryInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setJournalEntryInput(e.target.value)
  }

  // Handles the submission of the form
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newJournalInput: NewJournalInput = {
      phaseId: phaseId,
      journalEntryTitle: journalEntryTitle,
      journalEntryDate: journalEntryDate,
      journalEntryDescription: journalEntryDescription,
      journalEntryInput: journalEntryInput,
    }

    dispatch(addJournalInputEntry(newJournalInput))
    clearForm()
  }

  // Clears the form
  function clearForm() {
    setJournalEntryTitle('')
    setJournalEntryDate('')
    setJournalEntryDescription('')
    setJournalEntryInput('')
  }

  //Renders the form
  return (
    <form onSubmit={handleSubmit} aria-label="Add Journal Entry">
      <div>
        <div className="field">
          <label className="label" htmlFor="journalEntryTitle">
            Title
          </label>
          <div className="control">
            <input
              className="input is-success"
              type="text"
              placeholder="Ko wai te ingoa?"
              name="journalEntryTitle"
              id="journalEntryTitle"
              value={journalEntryTitle}
              onChange={handleJournalEntryTitleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="journalEntryDate">
            Date
          </label>
          <div className="control">
            <input
              className="input is-success"
              type="text"
              placeholder="Ko te ra?"
              name="journalEntryDate"
              id="journalEntryDate"
              value={journalEntryDate}
              onChange={handleJournalEntryDateChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="journalEntryDescription">
            Description
          </label>
          <div className="control">
            <textarea
              className="textarea is-success"
              placeholder="He whakaro?"
              name="journalEntryDescription"
              id="journalEntryDescription"
              value={journalEntryDescription}
              onChange={handleJournalEntryDescriptionChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="journalEntryInput">
            Entry
          </label>
          <div className="control">
            <textarea
              className="textarea is-success"
              placeholder="He korero?"
              name="journalEntryInput"
              id="journalEntryInput"
              value={journalEntryInput}
              onChange={handleJournalEntryInputChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success">Add</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default JournalInputForm
