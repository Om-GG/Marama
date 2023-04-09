import request from 'superagent'
import { MoonPhase, NewMoonPhase } from '../../models/MoonPhase'

const rootUrl = `/api/v1/moonPhase`

export async function getMoonPhases(): Promise<MoonPhase[]> {
  const res = await request.get(`${rootUrl}`)
  return res.body.moonPhases
}

export async function addMoonPhase(
  moonPhase: NewMoonPhase
): Promise<MoonPhase[]> {
  const res = await request.post(`${rootUrl}`).send({ moonPhase })
  return res.body.moonPhases
}

export async function updateMoonPhase(
  moonPhase: MoonPhase
): Promise<MoonPhase[]> {
  const res = await request.put(`${rootUrl}`).send({ moonPhase })
  return res.body.moonPhases
}

export async function deleteMoonPhase(id: number): Promise<MoonPhase[]> {
  const res = await request.delete(`${rootUrl}/${id}`)
  return res.body.moonPhases
}
