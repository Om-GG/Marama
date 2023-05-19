//This file is the clientside api for the journalInput model.
//This file uses request from superagent to make calls to the server to get, add, update, and delete journal inputs.
//The functions are used in the journalInput actions in the client/actions folder.
//The functions use the JournalInput and  NewJournalInput interface froms ../models/journalInput to type the data that is passed around in the application through the functions.

// Path: client/apis/journalInput.ts

import request from 'superagent'
import { JournalInput, NewJournalInput } from '../../models/journalInput'

const journalInputApiUrl = '/api/v1/journalInput'

interface JournalInputResponse {
  body: {
    journalInputs: JournalInput[]
  }
}

export async function getJournalInputs(): Promise<JournalInput[]> {
  try {
    const response: JournalInputResponse = await request
      .get(`${journalInputApiUrl}`)
      .timeout(5000)
    return response.body.journalInputs
  } catch (error) {
    console.error(error)
    throw new Error('Failed to get your journal inputs')
  }
}

export async function addJournalInput(
  journalInput: NewJournalInput
): Promise<JournalInput[]> {
  try {
    const response: JournalInputResponse = await request
      .post(`${journalInputApiUrl}`)
      .send({ journalInput })
      .timeout(5000)
    return response.body.journalInputs
  } catch (error) {
    console.error(error)
    throw new Error('Failed to add your journal input')
  }
}

export async function updateJournalInput(
  journalInput: JournalInput
): Promise<JournalInput[]> {
  try {
    const response: JournalInputResponse = await request
      .put(`${journalInputApiUrl}`)
      .send({ journalInput })
      .timeout(5000)
    return response.body.journalInputs
  } catch (error) {
    console.error(error)
    throw new Error('Failed to update your journal input')
  }
}

export async function deleteJournalInput(
  id: number
): Promise<JournalInput[]> {
  try {
    const response: JournalInputResponse = await request
      .delete(`${journalInputApiUrl}/${id}`)
      .timeout(5000)
    return response.body.journalInputs
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete your journal input')
  }
}
