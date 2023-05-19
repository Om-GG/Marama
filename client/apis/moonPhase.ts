import request from 'superagent'
import { MoonPhase, NewMoonPhase } from '../../models/moonPhase'

const moonPhasesApiUrl = `/api/v1/moonPhases`

interface MoonPhaseResponse {
  body: {
    moonPhases: MoonPhase[]
  }
}

export async function getMoonPhases(): Promise<MoonPhase[]> {
  try {
    const response: MoonPhaseResponse = await request
      .get(`${moonPhasesApiUrl}`)
      .timeout(5000)
    return response.body.moonPhases
  } catch (error) {
    console.error(error)
    throw new Error('Failed to get moon phases')
  }
}

export async function addMoonPhase(
  moonPhase: NewMoonPhase
): Promise<MoonPhase[]> {
  try {
    const response = await request
      .post(`${moonPhasesApiUrl}`)
      .send({ moonPhase })
    return response.body.moonPhases
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to add moon phase`)
  }
}

export async function updateMoonPhase(
  moonPhase: MoonPhase
): Promise<MoonPhase[]> {
  try {
    const response = await request
      .put(`${moonPhasesApiUrl}`)
      .send({ moonPhase })
    return response.body.moonPhases
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to update moon phase`)
  }
}

export async function deleteMoonPhase(id: number): Promise<MoonPhase[]> {
  try {
    const response = await request.delete(`${moonPhasesApiUrl}/${id}`)
    return response.body.moonPhases
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete moon phase')
  }
}
