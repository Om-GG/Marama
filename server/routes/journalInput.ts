//This file uses express to create a router that handles the routes for the journalInput table in the database.
//The router uses the db functions from ../db/journalInput to make calls to the database to get, add, update, and delete journal inputs.
//The router uses the JournalInputSnakeCase interface from ../models/journalInput to type the data that is passed around in the application through the post and put routes.

// Path: server/routes/journalInput.ts

import express from 'express'
import { JournalInputSnakeCase } from '../../models/journalInput'

import {
  getJournalInputs,
  addJournalInput,
  updateJournalInput,
  deleteJournalInput,
} from '../db/journalInput'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const journalInputs = await getJournalInputs()
    res.json({ journalInputs })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong getting your journal inputs')
  }
})

//TODO: This route queries the database for journal inputs dynamically based on the search criteria by name, phaseId, keyword, description and date.

router.post('/', async (req, res) => {
  try {
    const journalInput = req.body.journalInput
    const newJournalInput: JournalInputSnakeCase = {
      phase_id: journalInput.phaseId,
      journal_entry_name: journalInput.journalEntryName,
      journal_entry_description: journalInput.journalEntryDescription,
      journal_entry_date: journalInput.journalEntryDate,
      journal_entry_input: journalInput.journalEntryInput,
    }
    await addJournalInput(newJournalInput)
    const journalInputs = await getJournalInputs()
    res.json({ journalInputs })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong adding your journal input')
  }
})

router.put('/', async (req, res) => {
  try {
    const journalInput = req.body.journalInput
    const newJournalInput: JournalInputSnakeCase = {
      id: journalInput.id,
      phase_id: journalInput.phaseId,
      journal_entry_name: journalInput.journalEntryName,
      journal_entry_description: journalInput.journalEntryDescription,
      journal_entry_date: journalInput.journalEntryDate,
      journal_entry_input: journalInput.journalEntryInput,
    }
    await updateJournalInput(newJournalInput)
    const journalInputs = await getJournalInputs()
    res.json({ journalInputs })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong updating your journal input')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteJournalInput(id)
    const journalInputs = await getJournalInputs()
    res.json({ journalInputs })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong deleting your journal input')
  }
})

export default router
