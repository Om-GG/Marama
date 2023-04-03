import request from 'superagent'
import { MoonPhase, NewMoonPhase } from '../../models/MoonPhase'

const rootUrl = '/api/v1'

export function getMoonPhases() {
  return request
    .get(`/api/v1/moonPhase`)
    .then((res) => {
      res.body
    })
    .catch((err) => {
      console.error(
        'Error consuming the API (in client/apis/MoonPhase.js):',
        err
      )
    })
}

export async function addMoonPhase(
  moonPhase: NewMoonPhase
): Promise<MoonPhase[]> {
  try {
    const res = await request.post(`${rootUrl}/moonPhase`).send({ moonPhase })
    return res.body.moonPhases
  } catch (err) {
    console.error('Error consuming the API (in client/apis/MoonPhase.js):', err)
    return []
  }
}

export async function updateMoonPhase(
  moonPhase: MoonPhase
): Promise<MoonPhase[]> {
  try {
    const res = await request.put(`${rootUrl}/moonPhase`).send({ moonPhase })
    return res.body.moonPhases
  } catch (err) {
    console.error('Error consuming the API (in client/apis/MoonPhase.js):', err)
    return []
  }
}

export async function deleteMoonPhase(id: number): Promise<MoonPhase[]> {
  try {
    const res = await request.delete(`${rootUrl}/moonPhase/${id}`)
    return res.body.moonPhases
  } catch (err) {
    console.error('Error consuming the API (in client/apis/MoonPhase.js):', err)
    return []
  }
}
console.log(getMoonPhases())
