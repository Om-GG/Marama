import request from 'superagent'
import { MoonPhase, NewMoonPhase } from '../../models/MoonPhase'

const rootUrl = '/api/v1'

export async function getMoonPhases(): Promise<MoonPhase[]> {
  try {
    const res = await request.get(`${rootUrl}/moonPhase`)
    return res.body.moonPhases
  } catch (err) {
    console.error('Error consuming the API (in client/apis/MoonPhase.js):', err)
  }
}
