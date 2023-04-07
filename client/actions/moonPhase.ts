import type { ThunkAction } from '../store'
import { MoonPhase, NewMoonPhase } from '../../models/MoonPhase'

import {
  addMoonPhase,
  deleteMoonPhase,
  getMoonPhases,
  updateMoonPhase,
} from '../apis/moonPhase'

export const REQUEST_MOON_PHASES = 'REQUEST_MOON_PHASES'
export const RECEIVE_MOON_PHASES = 'RECEIVE_MOON_PHASES'
export const FAILURE_MOON_PHASES = 'FAILURE_MOON_PHASES'
export const ADD_MOON_PHASE_FULFILLED = 'ADD_MOON_PHASE_FULFILLED'

export type MoonPhaseAction =
  | { type: typeof REQUEST_MOON_PHASES }
  | { type: typeof RECEIVE_MOON_PHASES; payload: MoonPhase[] }
  | { type: typeof FAILURE_MOON_PHASES; payload: string }

export function requestMoonPhases(): MoonPhaseAction {
  return {
    type: REQUEST_MOON_PHASES,
  }
}

export function receiveMoonPhases(moonPhases: MoonPhase[]): MoonPhaseAction {
  return {
    type: RECEIVE_MOON_PHASES,
    payload: moonPhases.map((moonPhase) => moonPhase),
  }
}

export function failureMoonPhases(errorMessage: string): MoonPhaseAction {
  return {
    type: FAILURE_MOON_PHASES,
    payload: errorMessage,
  }
}

export function addMarama(marama: NewMoonPhase): ThunkAction {
  return async (dispatch) => {
    return addMoonPhase(marama)
      .then((moonPhases) => {
        console.log(marama)
        console.log(moonPhases)
        dispatch(receiveMoonPhases(moonPhases))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureMoonPhases(err.message))
        } else {
          dispatch(failureMoonPhases('An unknown error occurred'))
        }
      })
  }
}

export function updateMarama(marama: MoonPhase): ThunkAction {
  return (dispatch) => {
    return updateMoonPhase(marama)
      .then((moonPhases) => {
        dispatch(receiveMoonPhases(moonPhases))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureMoonPhases(err.message))
        } else {
          dispatch(failureMoonPhases('An unknown error occurred'))
        }
      })
  }
}

export function deleteMarama(id: number): ThunkAction {
  return (dispatch) => {
    return deleteMoonPhase(id)
      .then((moonPhases) => {
        dispatch(receiveMoonPhases(moonPhases))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureMoonPhases(err.message))
        } else {
          dispatch(failureMoonPhases('An unknown error occurred'))
        }
      })
  }
}

export function getMarama(): ThunkAction {
  return (dispatch) => {
    dispatch(requestMoonPhases())
    return getMoonPhases()
      .then((moonPhases) => {
        dispatch(receiveMoonPhases(moonPhases))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureMoonPhases(err.message))
        } else {
          dispatch(failureMoonPhases('An unknown error occurred'))
        }
      })
  }
}
