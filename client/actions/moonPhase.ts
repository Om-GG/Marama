import type { ThunkAction } from '../store'
import { MoonPhase } from '../../models/MoonPhase'

import { getMoonPhases } from '../apis/moonPhase'

export const REQUEST_MOON_PHASES = 'REQUEST_MOON_PHASES'
export const RECEIVE_MOON_PHASES = 'RECEIVE_MOON_PHASES'
export const FAILURE_MOON_PHASES = 'FAILURE_MOON_PHASES'

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

export function getMarama(): ThunkAction {
  return (dispatch) => {
    dispatch(requestMoonPhases())
    return getMoonPhases()
      .then((moonPhases) => {
        console.log(receiveMoonPhases(moonPhases))
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
