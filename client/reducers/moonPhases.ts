import {
  MoonPhaseAction,
  REQUEST_MOON_PHASES,
  RECEIVE_MOON_PHASES,
  FAILURE_MOON_PHASES,
} from '../actions/moonPhase'
import { MoonPhase } from '../../models/moonPhase'

const initialState: MaramaState = {
  data: [],
  isLoading: false,
  error: null,
}

// STRETCH: use discriminated unions to make this type more specific
type MaramaState = {
  data: MoonPhase[]
  error: string | null
  isLoading: boolean
}

function marama(state = initialState, action: MoonPhaseAction): MaramaState {
  switch (action.type) {
    case RECEIVE_MOON_PHASES:
      return {
        error: null,
        data: action.payload,
        isLoading: false,
      }
    case REQUEST_MOON_PHASES:
      return {
        error: null,
        data: [],
        isLoading: true,
      }
    case FAILURE_MOON_PHASES:
      return {
        error: action.payload,
        data: [],
        isLoading: false,
      }

    default:
      return state
  }
}

export default marama
