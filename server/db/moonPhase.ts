import connection from './connection'
import { MoonPhaseSnakeCase } from '../../models/MoonPhase'

export function getMoonPhases(db = connection) {
  return db('moon_phase')
    .select('id', 'phase_name', 'phase_description')
    .orderBy('id')
}
export function addMoonPhase(moonPhase: MoonPhaseSnakeCase, db = connection) {
  return db('moon_phase').insert(moonPhase)
}
export function updateMoonPhase(
  newMoonPhase: MoonPhaseSnakeCase,
  db = connection
) {
  return db('moon_phase').where('id', newMoonPhase.id).update(newMoonPhase)
}

export function deleteMoonPhase(id: number, db = connection) {
  return db('moon_phase').where('id', id).delete()
}

// export function userCanEdit(
//   moonPhaseId: number,
//   auth0Id: string,
//   db = connection
// ) {
//   return db('moon_phase')
//     .where('id', moonPhaseId)
//     .first()
//     .then((MoonPhase: MoonPhaseSnakeCase) => {
//       if (MoonPhase.added_by_user !== auth0Id) {
//         throw new Error('Unauthorized')
//       }
//     })
// }
