//This component displays a form that connects to the journal_input table in the database.
//It allows the user to input a journal entry and submit it to the database.
//It also allows the user to view all of their journal entries.
//It also allows the user to delete a journal entry.
//It also allows the user to edit a journal entry.
//The input fields are journalEntryName, journalEntryDate, journalEntryDescription, and journalEntryInput. These are diplayed as Name, Date, Description, and Entry respectively.
//The user can submit the form by clicking the Add button.

//The form is displayed in the JournalInputForm component.

//Path: client/components/JournalInputForm.tsx
//Compare this snippet from client/components/AddMarama.tsx:
// import { useState } from 'react'
// import { useAppDispatch } from '../hooks/hooks'
// import { NewMoonPhase } from '../../models/moonPhase'
// import { addMarama } from '../actions/moonPhase'

// function AddMarama() {
//   const dispatch = useAppDispatch()
//   const [phaseName, setPhaseName] = useState('')
//   const [phaseDescription, setPhaseDescription] = useState('')

//   const handlePhaseNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhaseName(e.target.value)
//   }

//   const handlePhaseDescriptionChange = (
//     e: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     setPhaseDescription(e.target.value)
//   }
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     const newMarama: NewMoonPhase = {
//       phaseName: phaseName,
//       phaseDescription: phaseDescription,
//     }

//     dispatch(addMarama(newMarama))
//     clearForm()
//   }

//   function clearForm() {
//     setPhaseName('')
//     setPhaseDescription('')
//   }
//   return (
//     <form onSubmit={handleSubmit} aria-label="Add Marama">
//       <div>
//         <div className="field">
//           <label className="label" htmlFor="phaseName">
//             Name
//           </label>
//           <div className="control">
//             <input
//               className="input is-success"
//               type="text"
//               placeholder="Ko wai te marama??"
//               name="phaseName"
//               id="phaseName"
//               value={phaseName}
//               onChange={handlePhaseNameChange}
//             />
//           </div>
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="phaseDescription">
//             Description
//           </label>
//           <div className="control">
//             <textarea
//               className="textarea is-success"
//               placeholder="He whakaro?"
//               name="phaseDescription"
//               id="phaseDescription"
//               value={phaseDescription}
//               onChange={handlePhaseDescriptionChange}
//             />
//           </div>
//         </div>
//         <div className="field">
//           <div className="control">
//             <button className="button is-success">Add</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default AddMarama

// Imports necessary modules
import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
  addJournalInputEntry,
  deleteJournalInputEntry,
  updateJournalInputEntry,
  getJournalInputEntries,
} from '../actions/journalInput'
import { NewJournalInput } from '../../models/journalInput'

interface JournalInputFormProps {
  phaseId: number
}

// Creates the JournalInputForm component
function JournalInputForm() {
  const dispatch = useAppDispatch()
  const [journalEntryName, setJournalEntryName] = useState('')
  const [journalEntryDate, setJournalEntryDate] = useState('')
  const [journalEntryDescription, setJournalEntryDescription] = useState('')
  const [journalEntryInput, setJournalEntryInput] = useState('')

  // Handles the change of the journal entry name
  const handleJournalEntryNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJournalEntryName(e.target.value)
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
      journalEntryName: journalEntryName,
      journalEntryDate: journalEntryDate,
      journalEntryDescription: journalEntryDescription,
      journalEntryInput: journalEntryInput,
    }

    dispatch(addJournalInputEntry(newJournalInput))
    clearForm()
  }

  // Clears the form
  function clearForm() {
    setJournalEntryName('')
    setJournalEntryDate('')
    setJournalEntryDescription('')
    setJournalEntryInput('')
  }

  //Renders the form
  return (
    <form onSubmit={handleSubmit} aria-label="Add Journal Entry">
      <div>
        <div className="field">
          <label className="label" htmlFor="journalEntryName">
            Name
          </label>
          <div className="control">
            <input
              className="input is-success"
              type="text"
              placeholder="Ko wai te ingoa?"
              name="journalEntryName"
              id="journalEntryName"
              value={journalEntryName}
              onChange={handleJournalEntryNameChange}
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
