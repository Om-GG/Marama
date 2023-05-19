//This file uses ThunkAction from ../store to type the functionalities being used between the client api and the store.
//Compare this snippet from client/actions/moonPhase.ts:

// import type { ThunkAction } from '../store'
// import { MoonPhase, NewMoonPhase } from '../../models/moonPhase'

// import {
//   addMoonPhase,
//   deleteMoonPhase,
//   getMoonPhases,
//   updateMoonPhase,
// } from '../apis/moonPhase'

// export const REQUEST_MOON_PHASES = 'REQUEST_MOON_PHASES'
// export const RECEIVE_MOON_PHASES = 'RECEIVE_MOON_PHASES'
// export const FAILURE_MOON_PHASES = 'FAILURE_MOON_PHASES'

// export type MoonPhaseAction =
//   | { type: typeof REQUEST_MOON_PHASES }
//   | { type: typeof RECEIVE_MOON_PHASES; payload: MoonPhase[] }
//   | { type: typeof FAILURE_MOON_PHASES; payload: string }

// export function requestMoonPhases(): MoonPhaseAction {
//   return {
//     type: REQUEST_MOON_PHASES,
//   }
// }

// export function receiveMoonPhases(moonPhases: MoonPhase[]): MoonPhaseAction {
//   return {
//     type: RECEIVE_MOON_PHASES,
//     payload: moonPhases.map((moonPhase) => moonPhase),
//   }
// }

// export function failureMoonPhases(errorMessage: string): MoonPhaseAction {
//   return {
//     type: FAILURE_MOON_PHASES,
//     payload: errorMessage,
//   }
// }

// export function addMarama(marama: NewMoonPhase): ThunkAction {
//   return async (dispatch) => {
//     return addMoonPhase(marama)
//       .then((moonPhases) => {
//         dispatch(receiveMoonPhases(moonPhases))
//       })
//       .catch((err) => {
//         if (err instanceof Error) {
//           dispatch(failureMoonPhases(err.message))
//         } else {
//           dispatch(failureMoonPhases('An unknown error occurred'))
//         }
//       })
//   }
// }

// export function updateMarama(marama: MoonPhase): ThunkAction {
//   return (dispatch) => {
//     return updateMoonPhase(marama)
//       .then((moonPhases) => {
//         dispatch(receiveMoonPhases(moonPhases))
//       })
//       .catch((err) => {
//         if (err instanceof Error) {
//           dispatch(failureMoonPhases(err.message))
//         } else {
//           dispatch(failureMoonPhases('An unknown error occurred'))
//         }
//       })
//   }
// }

// export function deleteMarama(id: number): ThunkAction {
//   return (dispatch) => {
//     return deleteMoonPhase(id)
//       .then((moonPhases) => {
//         dispatch(receiveMoonPhases(moonPhases))
//       })
//       .catch((err) => {
//         if (err instanceof Error) {
//           dispatch(failureMoonPhases(err.message))
//         } else {
//           dispatch(failureMoonPhases('An unknown error occurred'))
//         }
//       })
//   }
// }

// export function getMarama(): ThunkAction {
//   return (dispatch) => {
//     dispatch(requestMoonPhases())
//     return getMoonPhases()
//       .then((moonPhases) => {
//         dispatch(receiveMoonPhases(moonPhases))
//       })
//       .catch((err) => {
//         if (err instanceof Error) {
//           dispatch(failureMoonPhases(err.message))
//         } else {
//           dispatch(failureMoonPhases('An unknown error occurred'))
//         }
//       })
//   }
// }

import type { ThunkAction } from '../store'
import { JournalInput, NewJournalInput } from '../../models/journalInput'

import {
  addJournalInput,
  deleteJournalInput,
  getJournalInputs,
  updateJournalInput,
} from '../apis/journalInput'

export const REQUEST_JOURNAL_INPUTS = 'REQUEST_JOURNAL_INPUTS'
export const RECEIVE_JOURNAL_INPUTS = 'RECEIVE_JOURNAL_INPUTS'
export const FAILURE_JOURNAL_INPUTS = 'FAILURE_JOURNAL_INPUTS'

export type JournalInputAction =
  | { type: typeof REQUEST_JOURNAL_INPUTS }
  | { type: typeof RECEIVE_JOURNAL_INPUTS; payload: JournalInput[] }
  | { type: typeof FAILURE_JOURNAL_INPUTS; payload: string }

export function requestJournalInputs(): JournalInputAction {
  return {
    type: REQUEST_JOURNAL_INPUTS,
  }
}

export function receiveJournalInputs(
  journalInputs: JournalInput[]
): JournalInputAction {
  return {
    type: RECEIVE_JOURNAL_INPUTS,
    payload: journalInputs.map((journalInput) => journalInput),
  }
}

export function failureJournalInputs(errorMessage: string): JournalInputAction {
  return {
    type: FAILURE_JOURNAL_INPUTS,
    payload: errorMessage,
  }
}

export function addJournalInputEntry(
  journalInput: NewJournalInput
): ThunkAction {
  return async (dispatch) => {
    return addJournalInput(journalInput)
      .then((journalInputs) => {
        dispatch(receiveJournalInputs(journalInputs))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureJournalInputs(err.message))
        } else {
          dispatch(
            failureJournalInputs(
              'An error occurred while adding your journal entry'
            )
          )
        }
      })
  }
}

export function updateJournalInputEntry(
  journalInput: JournalInput
): ThunkAction {
  return (dispatch) => {
    return updateJournalInput(journalInput)
      .then((journalInputs) => {
        dispatch(receiveJournalInputs(journalInputs))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureJournalInputs(err.message))
        } else {
          dispatch(
            failureJournalInputs(
              'An error occurred while updating your journal entry'
            )
          )
        }
      })
  }
}

export function deleteJournalInputEntry(id: number): ThunkAction {
  return (dispatch) => {
    return deleteJournalInput(id)
      .then((journalInputs) => {
        dispatch(receiveJournalInputs(journalInputs))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureJournalInputs(err.message))
        } else {
          dispatch(
            failureJournalInputs(
              'An error occurred while deleting your journal entry'
            )
          )
        }
      })
  }
}

export function getJournalInputEntries(): ThunkAction {
  return (dispatch) => {
    dispatch(requestJournalInputs())
    return getJournalInputs()
      .then((journalInputs) => {
        dispatch(receiveJournalInputs(journalInputs))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureJournalInputs(err.message))
        } else {
          dispatch(
            failureJournalInputs(
              'An error occurred while retrieving your journal entries'
            )
          )
        }
      })
  }
}
