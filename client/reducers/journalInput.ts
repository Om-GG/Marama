//This file contains the reducers for the journalInput state.
//The reducers are used to update the journalInput state.
//The reducers are used in the index.ts file in the same folder, after being exported.

// Path: client/reducers/journalInput.ts
// Compare this snippet from server/routes/moonPhases.ts:

// import {
//   MoonPhaseAction,
//   REQUEST_MOON_PHASES,
//   RECEIVE_MOON_PHASES,
//   FAILURE_MOON_PHASES,
// } from '../actions/moonPhase'
// import { MoonPhase } from '../../models/moonPhase'

// const initialState: MaramaState = {
//   data: [],
//   isLoading: false,
//   error: null,
// }

// // STRETCH: use discriminated unions to make this type more specific
// type MaramaState = {
//   data: MoonPhase[]
//   error: string | null
//   isLoading: boolean
// }

// function marama(state = initialState, action: MoonPhaseAction): MaramaState {
//   switch (action.type) {
//     case RECEIVE_MOON_PHASES:
//       return {
//         error: null,
//         data: action.payload,
//         isLoading: false,
//       }
//     case REQUEST_MOON_PHASES:
//       return {
//         error: null,
//         data: [],
//         isLoading: true,
//       }
//     case FAILURE_MOON_PHASES:
//       return {
//         error: action.payload,
//         data: [],
//         isLoading: false,
//       }

//     default:
//       return state
//   }
// }

// export default marama


import {
  JournalInputAction,
  REQUEST_JOURNAL_INPUTS,
  RECEIVE_JOURNAL_INPUTS,
  FAILURE_JOURNAL_INPUTS
} from '../actions/journalInput'

import { JournalInput } from '../../models/journalInput'

const initialState: JournalInputState = {
  data: [],
  isLoading: false,
  error: null,
}

// STRETCH: use discriminated unions to make this type more specific
type JournalInputState = {
  data: JournalInput[]
  error: string | null
  isLoading: boolean
}

function journalInput(state = initialState, action: JournalInputAction): JournalInputState {
  switch (action.type) {
    case RECEIVE_JOURNAL_INPUTS:
      return {
        error: null,
        data: action.payload,
        isLoading: false,
      }
    case REQUEST_JOURNAL_INPUTS:
      return {
        error: null,
        data: [],
        isLoading: true,
      }
    case FAILURE_JOURNAL_INPUTS:
      return {
        error: action.payload,
        data: [],
        isLoading: false,
      }

    default:
      return state
  }
}

export default journalInput