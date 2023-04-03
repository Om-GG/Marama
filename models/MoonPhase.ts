
export interface MoonPhase {
  id: number
  phaseName: string
  phaseDescription: string
}
export interface MoonPhaseSnakeCase {
  id?: number
  phase_name: string
  phase_description: string
}

export interface NewMoonPhase {
  phaseName: string
  phaseDescription: string
}

export type RawMoonPhaseArr = { data: MoonPhase }[]
